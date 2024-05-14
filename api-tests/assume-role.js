var Minio = require('minio')

const Arp =  require('minio/src/AssumeRoleProvider')
//const AssumeRoleProvider = Arp.AssumeRoleProvider

let asRoleProvider = new Arp({
    stsEndpoint:"http://127.0.0.1:22000",
    accessKey: 'minio',
    secretKey: 'minio123'

})
const asRoleClient= new Minio.Client({
    endPoint: 'localhost',
    port: 22000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123',
    credentialsProvider:asRoleProvider
})

const testAssumeRole = async () =>{
    const withRole = await asRoleClient.statObject("test-bucket","1.txt")
    console.log("Got 1st details at::", new Date())
}
testAssumeRole()

