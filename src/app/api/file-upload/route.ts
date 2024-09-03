import { NextRequest, NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from 'uuid';

const region = process.env.NEXT_PUBLIC_AWS_S3_REGION;
const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
const bucket = process.env.NEXT_PUBLIC_BUCKET_NAME;

if (!region || !accessKeyId || !secretAccessKey || !bucket) {
  throw new Error("Missing AWS credentials");
}

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function uploadFileToS3(file: Buffer, fileName: string) {
  const fileBuffer = file;

  const params = {
    Bucket: bucket!,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/*",
  };

  const command = new PutObjectCommand(params);
  const response = await s3Client.send(command);

  const url = `https://${bucket}.s3.${region}.amazonaws.com/${fileName}`;

  return { fileName, response,url };
}

export async function POST(request: NextRequest) {
  try {
    // const formData = await request.formData();
    // const file = formData.get("file");
    // if (!file) {
    //   return NextResponse.json({ error: "File is required" }, { status: 400 });
    // }

    // const buffer = Buffer.from(await file.arrayBuffer());

    // const fileName = await uploadFileToS3(buffer, file.name);

    // return NextResponse.json({ success: true, fileName });

    const formData = await request.formData();
    const fileEntry = formData.get("file");

    // Check if the file entry is an instance of File

    // Validate file entry
    if (!fileEntry) {
      return NextResponse.json({ error: "File is required" }, { status: 400 });
    }

    const file = fileEntry as File; // Type assertion to File
    const buffer = Buffer.from(await file.arrayBuffer());

    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.error("Upload Error:", error); // Log error details

    return NextResponse.json({ error: "Error uploading file" });
  }
}
