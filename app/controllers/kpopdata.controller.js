const Kpopdata = require("../models/kpopdata.model");

exports.create = (req, res) =>{
  if (!req.body){
    res.status(400).send({
        message: "content can not be empty!"
    });
  }  

  const kpopdata = new Kpopdata({
    GroupNameKpop: req.body.GroupNameKpop,
    KoreanNameKpop: req.body.KoreanNameKpop,
    DateofDebut: req.body.DateofDebut,
    Company: req.body.Company,
    Members: req.body.Members,
    FanclubName: req.body.FanclubName || false
  });

  Kpopdata.create(kpopdata, (err, data) => {
    if(err)
        res.status(500).send({
    message:
        err.message || "some error ocurred while creating the Tutorial"
    });
    else res.data(data);
  });
};