var Minio = require('minio')
var Fs = require('fs')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 22000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123'
});


function listObjectV2(){
    var bucketName = "sph-my-bucket"

    const fGetPromise = minioClient.listObjectsV2(bucketName, "/test", true)

    fGetPromise.on('data', function(obj) { console.log(obj) } )
    fGetPromise.on('error', function(err) { console.log(err) } )

}

listObjectV2()