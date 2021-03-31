const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = new express();
app.use(express.static("client"));
const cors_app = require("cors");
app.use(cors_app());

app.get("/", (req, res) => {
  res.render("index.html");
});

const nlu = getNLUInstance();

app.get("/url/emotion", (req, res) => {
  nlu
    .analyze({
      url: req.query.url,
      features: {
        emotion: {
          document: true,
        },
      },
    })
    .then(({ result }) => res.json(result.emotion.document))
    .catch((err) => res.send(err.message));
});
app.get("/url/sentiment", (req, res) => {
  nlu
    .analyze({
      url: req.query.url,
      features: {
        sentiment: {
          document: true,
        },
      },
    })
    .then(({ result }) => res.json(result.sentiment.document))
    .catch((err) => res.send(err.message));
});
app.get("/text/emotion", (req, res) => {
  nlu
    .analyze({
      text: req.query.text,
      features: {
        emotion: {
          document: true,
        },
      },
    })
    .then(({ result }) => res.json(result.emotion.document))
    .catch((err) => res.send(err.message));
});
app.get("/text/sentiment", (req, res) => {
  nlu
    .analyze({
      text: req.query.text,
      features: {
        sentiment: {
          document: true,
        },
      },
    })
    .then(({ result }) => res.json(result.sentiment.document))
    .catch((err) => res.send(err.message));
});

let server = app.listen(8080, () => {
  console.log("Listening", server.address().port);
});

function getNLUInstance() {
  const NaturalLanguageUnderstanding = require("ibm-watson/natural-language-understanding/v1");
  const { IamAuthenticator } = require("ibm-watson/auth");

  const naturalLanguageUnderstanding = new NaturalLanguageUnderstanding({
    version: "2021-03-31",
    authenticator: new IamAuthenticator({
      apikey: process.env.API_KEY,
    }),
    serviceUrl: process.env.API_URL,
  });
  return naturalLanguageUnderstanding;
}
