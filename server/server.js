const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const csv = require('csvtojson');
const helpers = require('./helpers/serverHelpers');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/location', (req, res) => {
    //Grabs IP address from API
    request('https://api.ipify.org/?format=json', (error, response, body) => {
        if(error) {
            console.log('error obtaining IP')
        } else {
            //parses incoming data to make ip address easily accessible
            let parsedIP = JSON.parse(body)

            //Grabs geolocation data from another api
            request(`http://ip-api.com/json/${parsedIP.ip}`, (error, response, body) => {
                if(error) {
                    console.log('error in API request');
                } else {
                    let json = JSON.parse(body);
                    let countryName = json.country;
                    const filePath = '../data/big-mac-index.csv';
                    
                    //uses csvtojson npm install to convert local csv to json data
                    csv()
                    .fromFile(filePath)
                    .then((results) => {
                        let matches = [];
                        let randomPool = [];
                        let latestLocalInfo;
                        let latestRandomInfo;
                        let response = [];
                        
                        //maps array of objects from the csv to create an array with all matching data
                        results.map((obj) => {
                            if(obj.Country === countryName){
                                matches.push(obj);

                                //creates second array with all countries other than the users and their most recent data
                            } else if(obj.Country !== countryName && obj.Date.includes('2016')){
                                randomPool.push(obj);
                            }
                        });
                        
                        //grabs most recent data from array of matching countries
                        latestLocalInfo = matches.pop();

                        //grabs random country information from the second array made
                        latestRandomInfo = helpers.randomizer(randomPool);
                        response.push(latestLocalInfo, latestRandomInfo)
                        res.send(response)
                    })   
                }
            })

        }
    })
})