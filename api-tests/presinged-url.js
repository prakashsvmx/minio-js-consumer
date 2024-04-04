var Minio = require('minio')

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 22000,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123'
});

async function generatePresignedUrl(bucketName, objectName) {
    console.log('➡ Generating presigned URL for object:', objectName);
    const url = await minioClient.presignedPutObject(bucketName, objectName);

    console.log(`Presigned URL for ${bucketName} ${objectName} is:${url}`)
    return url;
}

 generatePresignedUrl('test-bucket','1.txt')
