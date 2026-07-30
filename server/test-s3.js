require("dotenv").config();

const {
  ListBucketsCommand,
} = require("@aws-sdk/client-s3");

const s3 = require("./config/s3");

async function test() {
  try {
    const result = await s3.send(new ListBucketsCommand({}));

    console.log("✅ AWS Connected Successfully");
    console.log(result.Buckets);
  } catch (err) {
    console.error("❌ Connection Failed");
    console.error(err);
  }
}

test();