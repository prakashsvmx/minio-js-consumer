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
    const headers = {
        "response-content-disposition": "attachment; filename=\"1.txt\""

    }
    const url = await minioClient.presignedGetObject(bucketName, objectName, 20000,headers);

    console.log(`Presigned URL for is:${url}`)
    return url;
}


generatePresignedUrl('test-bucket',"1.txt")

export function buildQueryString(query: QueryParameterBag): string {
    const parts: string[] = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = escapeUri(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${escapeUri(value[i])}`);
            }
        } else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${escapeUri(value)}`;
            }
            parts.push(qsEntry);
        }
    }

    return parts.join("&");
}


export const escapeUri = (uri: string): string =>
    // AWS percent-encodes some extra non-standard characters in a URI
    encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);

const hexEncode = (c: string) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;

return encodeURIComponent(string).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

