module.exports = app => {
    const kpopdata = require("../controllers/kpopdata.controller");

    var router = require("express").Router();

    router.post("/", kpopdata.create);
};