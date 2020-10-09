const functions = require("firebase-functions"),
	express = require("express"),
	app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.redirect("/ComingSoon");
	// res.render('index');
});

app.get("/Timer", (req, res) => {
	res.render("timer");
});

app.get("/Offline", (req, res) => {
	res.render("offline");
});

app.get("/ComingSoon", (req, res) => {
	res.render("ComingSoon");
});

app.get("/Main", (req, res) => {
	res.render("index");
});

app.get("/CodeConduct", (req, res) => {
	res.render("codeofconduct");
});

app.get("/PrivacyPolicy", (req, res) => {
	res.render("privacy");
});

app.get("/Sponsorship", (req, res) => {
	res.render("sponsorship");
});

app.use((req, res, next) => {
	res.status(404).render("404");
});

exports.app = functions.https.onRequest(app);
