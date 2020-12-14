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

var _roots = require("./roots");

var _passport = _interopRequireDefault(require("./config/passport"));

var _config = _interopRequireDefault(require("./config"));

var _userCtrl = _interopRequireDefault(require("./controllers/userCtrl"));

var _subscriptionCtrl = _interopRequireDefault(require("./controllers/subscriptionCtrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongoose = require('mongoose');

var passport = require('passport');

var session = require('express-session');

var Cryptr = require('cryptr');

var cryptr = new Cryptr(_config["default"].key);
var PORT = process.env.PORT || 3003;
var absUrl = process.env.PORT ? 'https://milkmancoffee.herokuapp.com/' : 'http://localhost:' + PORT;
(0, _passport["default"])(passport); //self invokes passport

var app = (0, _express["default"])();
app.use(session({
  secret: 'banana',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use((0, _cors["default"])());
app.use((0, _compression["default"])());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded());
var dataObj = {},
    subscribeBundle = "",
    chooseproductsBundle = "",
    signupBundle = "",
    cartBundle = "",
    checkoutBundle = "",
    confirmationBundle = "",
    myaccountBundle = "",
    cafetoolsBundle = ""; // fs.readFile('./dist/js/subscribe.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   subscribeBundle = data || "";
// })

_fs["default"].readFile('./dist/js/chooseproducts.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  chooseproductsBundle = data || "";
});

_fs["default"].readFile('./dist/js/signup.bundle.min.js', "utf8", function (err, data) {
  if (err) console.log("ERR", err);
  signupBundle = data || "";
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


app.get('/subscribe', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, subscribeBundle, _roots.SubscribeRoot, "subscribe"));
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
  console.log(absUrl + '/subscriptions/' + req.params.id);
  fetcher(absUrl + '/subscriptions/' + req.params.id).then(function (response) {
    console.log(response);
    data = {
      subscriptionID: req.params.id,
      subscription: response
    };
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, signupBundle, _roots.SignupRoot, "signup"));
  });
});
app.get('/signup', function (req, res) {
  //page
  var data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, signupBundle, _roots.SignupRoot, "signup"));
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
app.post('/auth', passport.authenticate('local-signup'), _userCtrl["default"].login);
app.get('/getMe', _userCtrl["default"].getMe);
app.get('/logout', _userCtrl["default"].logout);
app.get('/users', _userCtrl["default"].read);
app.put('/users/:id', _userCtrl["default"].update);
app["delete"]('/users/:id', _userCtrl["default"].destroy);
app.get('/subscriptions', _subscriptionCtrl["default"].read);
app.get('/subscriptions/:id', _subscriptionCtrl["default"].readOne);
app.post('/subscriptions', _subscriptionCtrl["default"].create);
app.put('/subscriptions/:id', _subscriptionCtrl["default"].update);
app["delete"]('/subscriptions/:id', _subscriptionCtrl["default"].destroy);
app.get('/health', function (req, res) {
  return res.send('OK');
});
var mongoUri = 'mongodb+srv://' + cryptr.decrypt(_config["default"].dbuser) + ':' + cryptr.decrypt(_config["default"].dbpass) + '@milkman.bjixf.mongodb.net/milkman?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function () {
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
  return "\n      <html lang=\"en\">\n        <head>\n          <link data-default-icon=\"/images/cj_icon.ico\" data-badged-icon=\"/images/cj_icon.ico\" rel=\"shortcut icon\" href=\"/images/cj_icon.ico\">\n          <meta name=\"google-site-verification\" content=\"hzAIEHsN0e84-jcUhXzS7ahusAox1Ha14-sfJyMoq2w\" />\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n          <title>Cafe Juniper Milkman Service | Salt Lake City Coffee Subscriptions</title>\n          <meta name=\"Description\" content=\"Subscribe to downtown Salt Lake's newest coffee shop catering service! Offering coffee to go. Order for your home or office today!\">\n          <link rel=\"stylesheet\" href=\"https://use.typekit.net/mno0keq.css\">\n          <script src=\"https://kit.fontawesome.com/7fa747235e.js\" crossorigin=\"anonymous\"></script>\n          <style>\n            body {\n              margin: 0;\n              font-family: diazo-mvb-ex-cond, sans-serif;\n              font-weight: 400; font-style: normal;\n              overflow-x: hidden; font-size: 14px;\n              width: 100%; max-width: 100%; height: auto;\n            }\n            h1, h2 { font-weight: 700; font-size: 16px; }\n            th { font-weight: 700; font-size: 14px; }\n            td { font-size: 12px; }\n            p { font-weight: 100; font-size: 12px; }\n            a { text-decoration: none;}\n            i { font-size: 30px;}\n            @media (min-width: 700px){\n              body, th, h1, h2, td { font-size: 30px; }\n              p { font-size: 18px; }\n            }\n          </style>\n          ".concat(styles, "\n        </head>\n        <body>\n          <script>window.os = window.os || {};</script>\n          <script>window.__DATA__=").concat(dataString, "</script>\n          <div id=\"app\" role=\"main\">").concat(body, "</div>\n          <script>").concat(bundle, "</script>\n          <script defer>\n            fetch('https://npm-data-storage.herokuapp.com/addData', {\n              method:\"POST\",\n              headers: { 'Content-Type': 'application/json' },\n              body: JSON.stringify({\n                type: \"pageload\",\n                date: new Date(),\n                url: window.origin,\n                device: window.navigator.appVersion,\n                referrer: document.referrer,\n                performance: window.performance.timing\n              })\n            })\n            .then((res) => res.text())\n            .then((data) => console.log(\"page load\"))\n            window.addEventListener('click', (e) => {\n              fetch('https://npm-data-storage.herokuapp.com/addData', {\n                method:\"POST\",\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify({\n                  type: \"click\",\n                  date: new Date(),\n                  url: window.origin,\n                  device: window.navigator.appVersion,\n                  referrer: document.referrer,\n                  performance: window.performance.timing,\n                  clickThing: e.target.outerHTML\n                })\n              })\n              .then((res) => res.text())\n              .then((data) => console.log(\"click\"))\n            })\n          </script>\n          <!-- Global site tag (gtag.js) - Google Analytics -->\n          <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-182243768-1\">\n          </script>\n          <script>\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'UA-182243768-1');\n          </script>\n        </body>\n      </html>\n    ");
}

function errHandle(err) {
  console.log(err);
}