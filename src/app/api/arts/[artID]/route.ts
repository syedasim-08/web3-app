import ArtModel from "@/lib/models/Arts";
import dbConnect from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { artID: string } }) {
  await dbConnect();

  const { artID } = params; // Extract id from route parameters
  console.log("id inside route", artID)

  try {
    const art = await ArtModel.findById(artID);

    if (!art) {
      return NextResponse.json({ error: "Art not found" }, { status: 404 });
    }

    return NextResponse.json(art);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
