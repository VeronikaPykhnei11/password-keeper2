const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const app = express();
const db = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const passwordHash = require("password-hash");
app.use(cors());

const jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: false }));

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);

  app.post("/signup", jsonParser, (req, res) => {
    if (req.body.confirmPassword !== req.body.password) {
      return res.status(403).send("Confirmation password error");
    }
    database
      .collection("users")
      .find({ email: req.body.email }, function (err, user) {
        if (user.ops) {
          return res.status(403).send({ error: "Email already exist" });
        }
      });
    database
      .collection("users")
      .find({ username: req.body.username }, function (err, user) {
        if (user.ops) {
          return res.status(403).send({ error: "Username already exist" });
        }
      });
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      password: passwordHash.generate(req.body.password),
    };
    database.collection("users").insert(newUser, (err, result) => {
      if (err) {
        return res.send({ error: "An error has occurred" });
      } else {
        return res.send(result.ops[0]);
      }
    });
  });
  app.post("/signin", jsonParser, (req, res) => {
    if (!database.collection("users").find({ email: req.body.email })) {
      return res.status(404).send({ error: "User not exists" });
    }
    let hashedPassword = 123;
    database
      .collection("users")
      .findOne({ email: req.body.email }, (err, result) => {
        if (err) {
          return res.send({ error: "An error has occurred" });
        } else {
          hashedPassword = result.password;
          if (passwordHash.verify(req.body.password, hashedPassword))
            return res.status(200).send("Success");
          else {
            return res.status(403).send({ error: "Error" });
          }
        }
      });
  });
  app.listen(3032, () => {
    console.log("We are live on " + 3032);
  });
});
