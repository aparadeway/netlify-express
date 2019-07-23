'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const sqlite = require('sqlite');

// var dbPromise = sqlite.open('./db/portral.db', {Promise});
// var db;

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Fuck Express.js!</h1>');
  res.end();
});

// app.post('/register', async (req, res) => {
// 	var user = req.body;
// 	if(user){
// 		const { email, basicInfo, detail } = user;
// 		const { businessForm, industry, subTypeOfIndustry } = basicInfo;
// 		const { 
// 			addressBuild,
// 			addressBuildHana,
// 			addressCounty,
// 			addressCountyHana,
// 			addressPostcode,
// 			addressStreetNumber,
// 			birth,
// 			build,
// 			buildHana,
// 			companyName,
// 			companyNameHana,
// 			county,
// 			countyHana,
// 			firstName,
// 			firstNameHana,
// 			lastName,
// 			lastNameHana,
// 			gender,
// 			name,
// 			number,
// 			postcode,
// 			streetNumber,
// 			tel
// 		} = detail;
// 		var result = await db.run(`
// 			insert into user (
// 				addressBuild,
// 				addressBuildHana,
// 				addressCounty,
// 				addressCountyHana,
// 				addressPostcode,
// 				addressStreetNumber,
// 				birth,
// 				build,
// 				buildHana,
// 				companyName,
// 				companyNameHana,
// 				county,
// 				countyHana,
// 				firstName,
// 				firstNameHana,
// 				lastName,
// 				lastNameHana,
// 				gender,
// 				name,
// 				number,
// 				postcode,
// 				streetNumber,
// 				tel
// 			) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
// 			addressBuild,
// 			addressBuildHana,
// 			addressCounty,
// 			addressCountyHana,
// 			addressPostcode,
// 			addressStreetNumber,
// 			birth,
// 			build,
// 			buildHana,
// 			companyName,
// 			companyNameHana,
// 			county,
// 			countyHana,
// 			firstName,
// 			firstNameHana,
// 			lastName,
// 			lastNameHana,
// 			gender,
// 			name,
// 			number,
// 			postcode,
// 			streetNumber,
// 			tel
// 		);
// 		if(result) {
// 			res.send({
// 				success: true,
// 				message: '注册成功'
// 			});
// 		}
// 	}
// })


// app.post('/sendMail', async (req, res) => {
// 	var mail = req.body;
// 	if(mail){
// 		const { title, content, origin } = mail;
// 		var result = await db.run(`
// 			insert into email (
// 				title,
// 				origin,
// 				content
// 			) values (?, ?, ?)`,
// 			title,
// 			origin,
// 			content
// 		);
// 		if(result) {
// 			res.send({
// 				success: true,
// 				message: '发送成功'
// 			});
// 		}
// 	}
// })

// ;

// (async function() {
// 	db = await dbPromise
// })()

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
