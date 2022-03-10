import { SharedIniFileCredentials, S3 } from 'aws-sdk';

const bucket = process.env.AWS_BUCKET;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const region = process.env.AWS_REGION;

const storage = new S3({
    region,
    accessKeyId,
    secretAccessKey
  });

  const getBucket = () => {
    return bucket;
};

  const uploadToBucket = (file) => {
    const params = {
        Bucket:bucket,
        Key:file.name,
        Body:file
    };
    return storage.upload(params).promise();
}; 

module.exports = {
    getBucket,
    uploadToBucket
};