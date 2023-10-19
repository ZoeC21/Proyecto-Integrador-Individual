const sql = require("./dbConnect.js");

// constructor
const Kpopdata = function(kpopdata) {
  this.GroupNameKpop = kpopdata.GroupNameKpop;
  this.KoreanNameKpop = kpopdata.KoreanNameKpop;
  this.DateofDebut = kpopdata.DateofDebut;
  this.Company = kpopdata.Company;
  this.Members = kpopdata.Members;
  this.FanclubName = kpopdata.FanclubName;
};

Kpopdata.create = (newKpopdata, result) => {
  sql.query("INSERT INTO kpopdatas SET ?", newKpopdata, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created kpopdata: ", { id: res.insertId, ...newkpopdata });
    result(null, { id: res.insertId, ...newkpopdata });
  });
};

module.exports = Kpopdata;