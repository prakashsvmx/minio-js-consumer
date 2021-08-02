var Minio = require('minio')
var Fs = require('fs')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123'
});


var file = "/home/prakash/Downloads/Temp/IMG_20210718_153445.jpg"

/*
minioClient.putObject("sph-my-bucket", "dir/image.jpg", file, 
  function(err, objectInfo) {
    if (err) return console.log(err);
    console.log("File uploaded successfully.", objectInfo);
  })
 */

  var fileStream = Fs.createReadStream(file)
  var metadata = {
    "content-type": ''
  }
  var fileStat = Fs.stat(file, function(err, stats) {
    if(err) { 
      return console.log('error') 
    }
    minioClient.putObject("sph-my-bucket", "dir/image.jpg", fileStream, stats.size,
    function(err, objectInfo) {
      if (err) return console.log(err);
      console.log("File uploaded successfully1.", objectInfo);
    })
  })


  /*

//var fileStream = Fs.createReadStream(file)
var metadata = {
  "content-type": ''
}
var fileStat = Fs.stat(file, function(err, stats) {
  if(err) { 
    return console.log('error') 
  }
  
})

*/