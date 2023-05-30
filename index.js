var Minio = require('minio')

var s3Client = new Minio.Client({
    endPoint: 'localhost',
    port: 22000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123',
    //region:"us-east-1"
});


/*
var s3Client = new Minio.Client({
    endPoint: 's3.amazonaws.com',
    accessKey: 'TBD',
    secretKey: 'TBD',
    region: 'us-wast-1',
    //pathStyle: true,
    //useSSL: true,
})
*/

s3Client.traceOn()

const checkConn = () => {
    const objectName = '1.png'
    const bucketName = 'sph-test-inc-upld'
    s3Client.statObject(bucketName, objectName, (e, d) => {
        console.log(e, d)
    })
}



function listObjectV2(){
    var bucketName = "sph-my-bucket"

    const fGetPromise = s3Client.listObjectsV2(bucketName, "/test", true)

    fGetPromise.on('data', function(obj) { console.log(obj) } )
    fGetPromise.on('error', function(err) { console.log(err) } )

}

checkConn()