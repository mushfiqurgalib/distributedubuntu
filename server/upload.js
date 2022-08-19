var Express = require("express");
var Multer = require("multer");
var Minio = require("minio");
var BodyParser = require("body-parser");
var app = Express();

var minioClient = new Minio.Client({
    endPoint: '127.0.0.1',
    port: 9000  ,
    useSSL: false,
    accessKey: 'IQG3CTw2fY9Hwav5',
    secretKey: 'lIeujKtaDuynNuT89jBTVfoDnawkRRVZ'
});

var file='index.jpg';
var metaData = {
    'Content-Type': 'text/html',
    'Content-Language': 123,
    'X-Amz-Meta-Testing': 1234,
    'example': 5678
  }
  minioClient.fPutObject('class', 'index', file, metaData, function(err, objInfo) {
      if(err) {
          return console.log(err)
      }
      console.log("Success", objInfo.etag, objInfo.versionId)
  })