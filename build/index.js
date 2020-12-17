"use strict";

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _fs = _interopRequireDefault(require("fs"));

var _compression = _interopRequireDefault(require("compression"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passport = _interopRequireDefault(require("passport"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _cryptr = _interopRequireDefault(require("cryptr"));

var _roots = require("./roots");

var _passport2 = _interopRequireDefault(require("./config/passport"));

var _config = _interopRequireDefault(require("./config"));

var _userCtrl = _interopRequireDefault(require("./controllers/userCtrl"));

var _subscriptionCtrl = _interopRequireDefault(require("./controllers/subscriptionCtrl"));

var _orderCtrl = _interopRequireDefault(require("./controllers/orderCtrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cron = require('node-cron');

var cryptr = new _cryptr["default"](_config["default"].key);
var PORT = process.env.PORT || 3003;
(0, _passport2["default"])(_passport["default"]); //self invokes passport

var app = (0, _express["default"])();
app.use((0, _expressSession["default"])({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
cron.schedule('* * 1 * *', function () {
  (0, _nodeFetch["default"])('https://drcastillo.herokuapp.com/').then(function (res) {
    return console.log("requested at " + new Date());
  });
});
var dataObj = {},
    landingBundle = "",
    chooseproductsBundle = "",
    signuploginBundle = "",
    cartBundle = "",
    checkoutBundle = "",
    confirmationBundle = "",
    myaccountBundle = "",
    cafetoolsBundle = "";

_fs["default"].readFile('./dist/js/landing.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  landingBundle = data || "";
});

_fs["default"].readFile('./dist/js/chooseproducts.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  chooseproductsBundle = data || "";
});

_fs["default"].readFile('./dist/js/signuplogin.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  signuploginBundle = data || "";
}); // fs.readFile('./dist/js/cart.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   cartBundle = data || "";
// })
// fs.readFile('./dist/js/checkout.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   checkoutBundle = data || "";
// })
// fs.readFile('./dist/js/confirmation.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   confirmationBundle = data || "";
// })


_fs["default"].readFile('./dist/js/myaccount.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  myaccountBundle = data || "";
}); // fs.readFile('./dist/js/cafetools.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   cafetoolsBundle = data || "";
// })


app.get('/', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landingBundle, _roots.LandingRoot, "subscriptions"));
});
app.get('/subscriptions', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landingBundle, _roots.LandingRoot, "subscriptions"));
});
app.get('/chooseproducts', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, chooseproductsBundle, _roots.ChooseproductsRoot, "chooseproducts"));
});
app.get('/signup/:id', function (req, res) {
  //page
  var data = {};
  fetcher('https://milkmancoffee.herokuapp.com/api/orders/' + req.params.id).then(function (response) {
    data = {
      orderID: req.params.id,
      order: response,
      loggingIn: false
    };
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, signuploginBundle, _roots.SignupLoginRoot, "signup"));
  });
});
app.get('/signup', function (req, res) {
  //page
  var data = {
    orderID: "",
    order: {},
    loggingIn: false
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, signuploginBundle, _roots.SignupLoginRoot, "signup"));
});
app.get('/login/:id', function (req, res) {
  //page
  var data = {};
  fetcher('https://milkmancoffee.herokuapp.com/api/orders/' + req.params.id).then(function (response) {
    data = {
      orderID: req.params.id,
      order: response,
      loggingIn: true
    };
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, signuploginBundle, _roots.SignupLoginRoot, "login"));
  });
});
app.get('/login', function (req, res) {
  //page
  var data = {
    orderID: "",
    order: {},
    loggingIn: true
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, signuploginBundle, _roots.SignupLoginRoot, "login"));
});
app.get('/cart', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cartBundle, _roots.CartRoot, "cart"));
});
app.get('/checkout', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, checkoutBundle, _roots.CheckoutRoot, "checkout"));
});
app.get('/confirmation', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, confirmationBundle, _roots.ConfirmationRoot, "confirmation"));
});
app.get('/myaccount', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, _roots.MyaccountRoot, "myaccount"));
});
app.get('/cafetools', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cafetoolsBundle, _roots.CafetoolsRoot, "cafetools"));
});
app.get('/images/:id', function (req, res) {
  //service
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(_path["default"].join(__dirname, '../images/' + req.params.id));
});
app.post('/api/auth', _passport["default"].authenticate('local-signup'), _userCtrl["default"].login);
app.get('/api/getMe', _userCtrl["default"].getMe);
app.get('/api/logout', _userCtrl["default"].logout);
app.get('/api/users', _userCtrl["default"].read);
app.put('/api/users/:id', _userCtrl["default"].update);
app.get('/api/subscriptions', _subscriptionCtrl["default"].read);
app.get('/api/subscriptions/:id', _subscriptionCtrl["default"].readOne);
app.post('/api/subscriptions', _subscriptionCtrl["default"].create);
app.put('/api/subscriptions/:id', _subscriptionCtrl["default"].update);
app["delete"]('/api/subscriptions/:id', _subscriptionCtrl["default"].destroy);
app.get('/api/orders', _orderCtrl["default"].read);
app.get('/api/orders/:id', _orderCtrl["default"].readOne);
app.post('/api/orders', _orderCtrl["default"].create);
app.put('/api/orders/:id', _orderCtrl["default"].update);
app["delete"]('/api/orders/:id', _orderCtrl["default"].destroy);
app.get('/health', function (req, res) {
  return res.send('OK');
});
var mongoUri = 'mongodb+srv://' + cryptr.decrypt(_config["default"].dbuser) + ':' + cryptr.decrypt(_config["default"].dbpass) + '@milkman.bjixf.mongodb.net/milkman?retryWrites=true&w=majority';

_mongoose["default"].connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

_mongoose["default"].connection.on('error', console.error.bind(console, 'connection error'));

_mongoose["default"].connection.once('open', function () {
  console.log("Connected to mongoDB");
});

app.listen(PORT, function () {
  console.log('Running on http://localhost:' + PORT);
}); // functions!!!!!!!!!!!!!

function getQueries(req, res) {
  var qOb = {};
  var queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];

  if (queries.length) {
    queries.forEach(function (x) {
      var y = x.split('=');
      qOb[y[0]] = y[1];
    });
  }

  return qOb;
}

function fetcher(url) {
  return (0, _nodeFetch["default"])(url).then(function (response) {
    if (response.status !== 200) throw Error(response.statusText);
    return response.json();
  }).then(function (json) {
    return json;
  })["catch"](errHandle);
}

function returnHTML(data, bundle, Page, title) {
  var dataString = JSON.stringify(data);
  var sheet = new _styledComponents.ServerStyleSheet();
  var body = (0, _server.renderToString)(sheet.collectStyles( /*#__PURE__*/_react["default"].createElement(Page, {
    data: data
  })));
  var styles = sheet.getStyleTags();
  return "\n      <html lang=\"en\">\n        <head>\n          <link data-default-icon=\"/images/cj_icon.ico\" data-badged-icon=\"/images/cj_icon.ico\" rel=\"shortcut icon\" href=\"/images/cj_icon.ico\">\n          <meta name=\"google-site-verification\" content=\"hzAIEHsN0e84-jcUhXzS7ahusAox1Ha14-sfJyMoq2w\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Cafe Juniper Milkman Service | Salt Lake City Coffee Subscriptions</title>\n          <meta name=\"Description\" content=\"Subscribe to downtown Salt Lake's newest coffee shop catering service! Offering coffee to go. Order for your home or office today!\">\n          <link rel=\"stylesheet\" href=\"https://use.typekit.net/mno0keq.css\">\n          <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n          <style>\n            body, button, input {\n              margin: 0;\n              font-family: diazo-mvb-ex-cond, sans-serif;\n              font-weight: 400; font-style: normal;\n              overflow-x: hidden; font-size: 14px;\n              width: 100%; max-width: 100%; height: auto;\n            }\n            h1, h2 { font-weight: 700; font-size: 16px; }\n            th { font-weight: 700; font-size: 14px; }\n            td, button, input { font-size: 12px; }\n            p { font-weight: 100; font-size: 12px; }\n            a { text-decoration: none;}\n            i { font-size: 30px;}\n            @media (min-width: 700px){\n              body, th, h1, h2, td { font-size: 30px; }\n              p, input, button { font-size: 18px; }\n            }\n          </style>\n          ".concat(styles, "\n        </head>\n        <body>\n          <script>window.os = window.os || {};</script>\n          <script>window.__DATA__=").concat(dataString, "</script>\n          <div id=\"app\" role=\"main\">").concat(body, "</div>\n          <script>").concat(bundle, "</script>\n          <script defer>\n            fetch('https://npm-data-storage.herokuapp.com/addData', {\n              method:\"POST\",\n              headers: { 'Content-Type': 'application/json' },\n              body: JSON.stringify({\n                type: \"pageload\",\n                date: new Date(),\n                url: window.origin,\n                device: window.navigator.appVersion,\n                referrer: document.referrer,\n                performance: window.performance.timing\n              })\n            })\n            .then((res) => res.text())\n            .then((data) => console.log(\"page load\"))\n            window.addEventListener('click', (e) => {\n              fetch('https://npm-data-storage.herokuapp.com/addData', {\n                method:\"POST\",\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify({\n                  type: \"click\",\n                  date: new Date(),\n                  url: window.origin,\n                  device: window.navigator.appVersion,\n                  referrer: document.referrer,\n                  performance: window.performance.timing,\n                  clickThing: e.target.outerHTML\n                })\n              })\n              .then((res) => res.text())\n              .then((data) => console.log(\"click\"))\n            })\n          </script>\n          <!-- Global site tag (gtag.js) - Google Analytics -->\n          <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-182243768-1\">\n          </script>\n          <script>\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'UA-182243768-1');\n          </script>\n        </body>\n      </html>\n    ");
}

function errHandle(err) {
  console.log(err);
}