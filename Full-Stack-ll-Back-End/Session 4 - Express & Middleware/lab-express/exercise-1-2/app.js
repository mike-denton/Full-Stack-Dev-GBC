const express = require("express");
let app = new express();

app.listen(8083);

const getStrFromDate = (_d) => new Date(_d).toLocaleString();

// request ====> middleware /requestTime ====> next() =====> handleGreetRequest ====> end/send response...
let requestTime = (req, res, next) => {
    req.requestTime = Date.now();
    next();
};

// use => middle = expess
app.use(requestTime);

const handleGreetRequest = (req, res) => {
    console.log(`GET received: ${getStrFromDate(req.requestTime)}`);
    res.send("hello GET world!");
}

app.get("/greet", handleGreetRequest);

app.post("/greet", (req, res) => {
    console.log(`POST received: ${getStrFromDate(req.requestTime)}`);
    res.send("hello POST world!");
});

app.put("/greet", (req, res) => {
    console.log(`PUT received: ${getStrFromDate(req.requestTime)}`);
    res.send("hello PUT world!");
});

app.delete("/greet", (req, res) => {
    console.log(`DELETE received: ${getStrFromDate(req.requestTime)}`);
    res.send("hello DELETE world!");
});
