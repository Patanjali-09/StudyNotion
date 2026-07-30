const { PutObjectCommand } = require("@aws-sdk/client-s3");
const s3 = require("../config/s3");

const uploadFileToS3 = async (file, folder = "") => {
  const fileName = `${Date.now()}-${file.name}`;

  const key = folder ? `${folder}/${fileName}` : fileName;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: file.data,
    ContentType: file.mimetype,
  });

  await s3.send(command);

  return {
    secure_url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`,
  };
};

module.exports = {
  uploadFileToS3,
};