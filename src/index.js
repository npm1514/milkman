import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import path from 'path'

import SubscribeRoot from "./roots/SubscribeRoot";
import ChooseproductsRoot from "./roots/ChooseproductsRoot";
import LoginRoot from "./roots/LoginRoot";
import CartRoot from "./roots/CartRoot";
import CheckoutRoot from "./roots/CheckoutRoot";
import ConfirmationRoot from "./roots/ConfirmationRoot";
import MyaccountRoot from "./roots/MyaccountRoot";
import CafetoolsRoot from "./roots/CafetoolsRoot";

import { ServerStyleSheet } from 'styled-components';

import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

var PORT = process.env.PORT || 3003;

const app = express();
app.use(compression());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

var dataObj = {},
subscribeBundle = "",
chooseproductsBundle = "",
loginBundle = "",
cartBundle = "",
checkoutBundle = "",
confirmationBundle = "",
myaccountBundle = "",
cafetoolsBundle = "";

// fs.readFile('./dist/js/subscribe.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   subscribeBundle = data || "";
// })
fs.readFile('./dist/js/chooseproducts.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  chooseproductsBundle = data || "";
})
// fs.readFile('./dist/js/login.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   loginBundle = data || "";
// })
// fs.readFile('./dist/js/cart.bundle.min.js', "utf8", (err, data) => {
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
// fs.readFile('./dist/js/myaccount.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   myaccountBundle = data || "";
// })
// fs.readFile('./dist/js/cafetools.bundle.min.js', "utf8", (err, data) => {
//   if (err) console.log("ERR" ,err);
//   cafetoolsBundle = data || "";
// })

app.get('/subscribe', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, subscribeBundle, SubscribeRoot, "subscribe"));
});
app.get('/chooseproducts', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, chooseproductsBundle, ChooseproductsRoot, "chooseproducts"));
});
app.get('/login', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/cart', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cartBundle, CartRoot, "cart"));
});
app.get('/checkout', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, checkoutBundle, CheckoutRoot, "checkout"));
});
app.get('/confirmation', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, confirmationBundle, ConfirmationRoot, "confirmation"));
});
app.get('/myaccount', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, myaccountBundle, MyaccountRoot, "myaccount"));
});
app.get('/cafetools', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, cafetoolsBundle, CafetoolsRoot, "cafetools"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.get('/health', (req, res) => res.send('OK'));

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
            body {
              margin: 0;
              font-family: diazo-mvb-ex-cond, sans-serif;
              font-weight: 400; font-style: normal;
              overflow-x: hidden; font-size: 14px;
              width: 100%; max-width: 100%; height: auto;
            }
            h1, h2 { font-weight: 700; font-size: 16px; }
            th { font-weight: 700; font-size: 14px; }
            td { font-size: 12px; }
            p { font-weight: 100; font-size: 12px; }
            a { text-decoration: none;}
            i { font-size: 30px;}
            @media (min-width: 700px){
              body, th, h1, h2, td { font-size: 30px; }
              p { font-size: 18px; }
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
    console.log(err);
}