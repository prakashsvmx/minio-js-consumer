var Minio = require('minio')
var Fs = require('fs')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 22000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123'
});

const uploadImage = () =>{
var file = "/home/prakash/Pictures/1.png"

  var fileStream = Fs.createReadStream(file)
  var metadata = {
    "content-type": ''
  }
  var fileStat = Fs.stat(file, async function(err, stats) {
    if(err) { 
      return console.log('error') 
    }
   
    try{
    await minioClient.putObject("test-tag-bucket", "1.png", fileStream, stats.size,{
        "x-amz-tagging":"Key1=Value1"
    })
  }catch(err){
    console.log("Error", err)
  }
  })
}

uploadImage()