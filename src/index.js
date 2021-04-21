import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';

import path from 'path'
import express from "express";
import fetch from "node-fetch";
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import config from './config';
import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);

import { LandingRoot, ChooseproductsRoot, SignupLoginRoot, CartRoot, CheckoutRoot, ConfirmationRoot, ForgotPasswordRoot, FourOhFourRoot, MyaccountRoot, CafetoolsRoot } from './roots';

import passportConfig from './config/passport';

import { userCtrl, subscriptionCtrl, orderCtrl, payCtrl } from './controllers';

var PORT = process.env.PORT || 3003;

passportConfig(passport);//self invokes passport

const app = express();

app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


var dataObj = {},
landingBundle = "",
chooseproductsBundle = "",
signuploginBundle = "",
cartBundle = "",
checkoutBundle = "",
confirmationBundle = "",
forgotpasswordBundle = "",
fourohfourBundle = "",
myaccountBundle = "",
cafetoolsBundle = "";

fs.readFile('./dist/js/landing.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  landingBundle = data || "";
})
fs.readFile('./dist/js/chooseproducts.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  chooseproductsBundle = data || "";
})
fs.readFile('./dist/js/signuplogin.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  signuploginBundle = data || "";
})
fs.readFile('./dist/js/cart.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cartBundle = data || "";
})
fs.readFile('./dist/js/checkout.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  checkoutBundle = data || "";
})
fs.readFile('./dist/js/confirmation.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  confirmationBundle = data || "";
})
fs.readFile('./dist/js/forgotpassword.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  forgotpasswordBundle = data || "";
})
fs.readFile('./dist/js/fourohfour.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  fourohfourBundle = data || "";
})
fs.readFile('./dist/js/myaccount.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  myaccountBundle = data || "";
})
fs.readFile('./dist/js/cafetools.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  cafetoolsBundle = data || "";
})

app.get('/', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landingBundle, LandingRoot, "subscriptions"));
});
app.get('/subscriptions', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, landingBundle, LandingRoot, "subscriptions"));
});
app.get('/login', (req, res) => {
  let data = {
    loggingIn: true
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, signuploginBundle, SignupLoginRoot, "login"));
});
app.get('/signup', (req, res) => {
  let data = {
    loggingIn: false
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, signuploginBundle, SignupLoginRoot, "signup"));
});
app.get('/signup/:subscriptionID', (req, res) => {
  let data = {
    subscriptionID: req.params.subscriptionID,
    loggingIn: false
  };
  fetcher('https://milkmancoffee.herokuapp.com/api/subscriptions/' + req.params.subscriptionID).then((response) => {
    data.subscription = response;
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, signuploginBundle, SignupLoginRoot, "signup"));
  });
});
app.get('/myaccount', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, MyaccountRoot, "myaccount"));
});
app.get('/chooseproducts', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, chooseproductsBundle, ChooseproductsRoot, "chooseproducts"));
});
app.get('/cart', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cartBundle, CartRoot, "cart"));
});
app.get('/checkout', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, checkoutBundle, CheckoutRoot, "checkout"));
});
app.get('/confirmation/:orderID', (req, res) => {
  let data = {
    orderID: req.params.orderID,
  };
  fetcher('https://milkmancoffee.herokuapp.com/api/orders/' + req.params.orderID)
  .then((response) => {
    data.order = response;
    console.log("order response", response);
    res.set('Cache-Control', 'public, max-age=31557600');
    res.send(returnHTML(data, confirmationBundle, ConfirmationRoot, "confirmation"));
  });
});
app.get('/passwordrecovery', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, forgotpasswordBundle, ForgotPasswordRoot, "password recovery"));
});
app.get('/passwordrecovery/:id', (req, res) => {
  let data = {
    userID: req.params.id,
    timer: req.query.pr
  };
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, forgotpasswordBundle, ForgotPasswordRoot, "password recovery"));
});
app.get('/cafetools', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cafetoolsBundle, CafetoolsRoot, "cafetools"));
});
app.get('/error', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, fourohfourBundle, FourOhFourRoot, "error"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});
app.post('/api/login', passport.authenticate('local-login'), userCtrl.login);
app.post('/api/signup', passport.authenticate('local-signup'), userCtrl.login);
app.get('/api/getMe', userCtrl.getMe);
app.get('/api/logout', userCtrl.logout);
app.get('/api/users', userCtrl.read);
app.get('/api/users/:id', userCtrl.readOne);
app.put('/api/users/:id', userCtrl.update);

app.get('/api/subscriptions', subscriptionCtrl.read);
app.get('/api/subscriptions/:id', subscriptionCtrl.readOne);
app.post('/api/subscriptions', subscriptionCtrl.create);
app.put('/api/subscriptions/:id', subscriptionCtrl.update);
app.delete('/api/subscriptions/:id', subscriptionCtrl.destroy);
app.get('/api/subscriptions/destroyEverything', subscriptionCtrl.destroyEverything);

app.get('/api/orders', orderCtrl.read);
app.get('/api/orders/:id', orderCtrl.readOne);
app.post('/api/orders', orderCtrl.create);
app.put('/api/orders/:id', orderCtrl.update);
app.delete('/api/orders/:id', orderCtrl.destroy);

app.post('/api/pay', payCtrl.pay);
app.post('/api/card', (req, res) => {
  let body = req.body;
  let props = Object.keys(body);
  props.map(a => {
    body[a] = cryptr.encrypt(body[a])
  })
  res.send(body)
});

app.post('/api/recover', (req, res, next) => {
  req.nodeEmail = cryptr.decrypt(config.nodemailerEmail)
  req.nodePW = cryptr.decrypt(config.nodemailerPW);
  next()
}, userCtrl.recover)

app.post('/api/changePassword/:id', userCtrl.passwordChange)

app.get('/health', (req, res) => res.send('OK'));

app.get('/*', (req, res) => {
  let data = {};
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, fourohfourBundle, FourOhFourRoot, "error"));
});

var mongoUri = 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@milkman.bjixf.mongodb.net/milkman?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});

// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
      <html lang="en">
        <head>
          <link data-default-icon="/images/cj_icon.ico" data-badged-icon="/images/cj_icon.ico" rel="shortcut icon" href="/images/cj_icon.ico">
          <meta name="google-site-verification" content="hzAIEHsN0e84-jcUhXzS7ahusAox1Ha14-sfJyMoq2w" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Cafe Juniper Milkman Service | Salt Lake City Coffee Subscriptions</title>
          <meta name="Description" content="Subscribe to downtown Salt Lake's newest coffee shop catering service! Offering coffee to go. Order for your home or office today!">
          <link rel="stylesheet" href="https://use.typekit.net/mno0keq.css">
          <script src="https://kit.fontawesome.com/7fa747235e.js" crossorigin="anonymous"></script>
          <style>
            body, button, input, textarea {
              margin: 0;
              font-family: diazo-mvb-ex-cond, sans-serif;
              font-weight: 400; font-style: normal;
              overflow-x: hidden; font-size: 14px;
              width: 100%; max-width: 100%; height: auto;
            }
            h1, h2 { font-weight: 700; font-size: 16px; }
            th { font-weight: 700; font-size: 14px; }
            td, button, input { font-size: 12px; }
            p { font-weight: 100; font-size: 12px; }
            a { text-decoration: none;}
            i { font-size: 30px;}
            @media (min-width: 700px){
              body, th, h1, h2, td { font-size: 30px; }
              p, input, button { font-size: 18px; }
            }
          </style>
          ${styles}
        </head>
        <body>
          <script>window.os = window.os || {};</script>
          <script>window.__DATA__=${dataString}</script>
          <div id="app" role="main">${body}</div>
          <script>${bundle}</script>
          <script defer>
            fetch('https://npm-data-storage.herokuapp.com/addData', {
              method:"POST",
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: "pageload",
                date: new Date(),
                url: window.origin,
                device: window.navigator.appVersion,
                referrer: document.referrer,
                performance: window.performance.timing
              })
            })
            .then((res) => res.text())
            .then((data) => console.log("page load"))
            window.addEventListener('click', (e) => {
              fetch('https://npm-data-storage.herokuapp.com/addData', {
                method:"POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  type: "click",
                  date: new Date(),
                  url: window.origin,
                  device: window.navigator.appVersion,
                  referrer: document.referrer,
                  performance: window.performance.timing,
                  clickThing: e.target.outerHTML
                })
              })
              .then((res) => res.text())
              .then((data) => console.log("click"))
            })
          </script>
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-182243768-1">
          </script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-182243768-1');
          </script>
        </body>
      </html>
    `;
}

function errHandle(err){
    console.log("errHandle", err);
}
