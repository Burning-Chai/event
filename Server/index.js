// -----------------------------------------------------------------------------
// 定数の設定
const API_KEY = '*****' // 環境に合わせて変更
const EMOTION_API_URL = 'https://api.projectoxford.ai/emotion/v1.0/recognize'
const PORT_NAME = 'COM5'; // Win環境
const BASE_URL = '*****' // 環境に合わせて変更

// -----------------------------------------------------------------------------
// モジュールのインポート
var express = require('express');
var request = require('request');
var moment = require("moment");
var serialport = require('serialport');
var NodeWebcam = require('node-webcam');
var fs = require("fs")
	, path = require("path")
	, dir = process.argv[2] || '.';
var app = express();

// -----------------------------------------------------------------------------
// Webサーバー設定
var port = (process.env.PORT || 3000);
var server = app.listen(port, function () {
	console.log('Node is running on port ' + port);
});

// -----------------------------------------------------------------------------
// ルーター設定
app.get('/', function (req, res, next) {
	res.send('Node is running on port ' + port);
});

// -----------------------------------------------------------------------------
// シリアル接続設定
var sp = new serialport.SerialPort(PORT_NAME, {
	baudRate: 9600,
	dataBits: 8,
	parity: 'none',
	stopBits: 1,
	flowControl: false,
	parser: serialport.parsers.readline("\n")
});

// カメラ設定
var camera_opts = {
	width: 1280,
	height: 720,
	delay: 0,
	quality: 100,
	output: "jpeg",
	verbose: true
}

// littleBitsからの入力（シリアルポート経由）
sp.on('data', function (input) {
	var buffer = new Buffer(input, 'utf8');
	try {
		console.log('serialport buffer: ' + buffer);
		// ボタンが押された場合
		if (buffer == 1) {
			console.log('/input/button');
			var Webcam = NodeWebcam.create(camera_opts);
			Webcam.capture('images/' + moment().format("YYYYMMDDHHmmss"));
			sp.write('5');
			sp.write('0');
		}
	} catch (e) {
		return;
	}
});

// 感情取得
app.get('/check', function (req, res, next) {
	console.log('----------');
	console.log(req.method);
	console.log(req.headers);
	console.log(req.url);
	console.log(req.query.name);
	console.log('----------');

	try {
		request({
			method: 'POST',
			url: EMOTION_API_URL,
			headers: {
				'Content-Type': 'application/octet-stream',
				'Ocp-Apim-Subscription-Key': API_KEY
			},
			body: binaryRead(req.query.name)
		}, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				console.log(JSON.parse(body));
				var happiness = JSON.parse(body)[0].scores.happiness;
				if (0 <= happiness && happiness < 0.2) {
					sp.write('1');
				} else if (0.2 <= happiness && happiness < 0.4) {
					sp.write('2');
				} else if (0.4 <= happiness && happiness < 0.6) {
					sp.write('3');
				} else if (0.6 <= happiness && happiness < 0.8) {
					sp.write('4');
				} else if (0.8 <= happiness) {
					sp.write('5');
				}
				res.json(body);

			} else {
				console.log('error: ' + response.statusCode);
				console.log(response.body);
			}
			res.status(response.statusCode).end();
		});
	} catch (e) {
		return;
	}
});

function binaryRead(file) {
	var bitmap = fs.readFileSync(file);
	return new Buffer(bitmap.toString('binary'),'binary');
}

// 写真リスト取得
app.get('/images', function (req, res, next) {
	fslist('./images/', function (err, results) {
		if (err) throw err;
		console.log(JSON.stringify(results));
		res.json(results);
		res.status(200).end();
	});
});

var fslist = function (p, callback) {
	var results = [];

	fs.readdir(p, function (err, files) {
		if (err) throw err;

		var pending = files.length;
		if (!pending) return callback(null, results);

		files.map(function (file) {
			return path.join(p, file);
		}).filter(function (file) {
			if (fs.statSync(file).isDirectory()) walk(file, function (err, res) {
				results.push({name: path.basename(file), children: res});
				if (!--pending) callback(null, results);
			});
			return fs.statSync(file).isFile();
		}).forEach(function (file) {
			var stat = fs.statSync(file);
			results.push({url:BASE_URL + path.basename(file), name:'images/' + path.basename(file)});
			if (!--pending) callback(null, results);
		});

	});
}
