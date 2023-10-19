const express = require('express');
const app = express();
const cors = require("cors");

require("./app/routes/kpopdata.routes")(app);

const port = 3000;

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', async(req, res)=> {
    const url = 'https://k-pop.p.rapidapi.com/boy-groups?q=BTS&by=Group%20Name';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'd341cf98a3msh8326b41fd6e9090p19854cjsn92a3b603ab94',
        'X-RapidAPI-Host': 'k-pop.p.rapidapi.com'
      }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
    }

    


})

app.listen(port, () =>{
    console.log(`Example app listening on port http://localhost:${port}`)
})



/*fetch('https://k-pop.p.rapidapi.com/boy-groups?q=BTS&by=Group%20Name')
.then(response => response.json())
.then(data => console.log(data));
res.send('hello word!')*/