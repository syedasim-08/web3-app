// import { data } from "@/utils/data";
// import { NextResponse } from "next/server";

// export async function GET(){
//     return NextResponse.json({
//         data
//     })
        
// }



import ArtModel from "@/lib/models/Arts";
import dbConnect from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
         await dbConnect();


try {
    const arts = await ArtModel.find({});
    return NextResponse.json(arts);
} catch (err: any) {

        return NextResponse.json({ error: err.message});
    
}
        
}

// POST method to create a new art entry
export async function POST(request: NextRequest) {
    await dbConnect();

    try {
        const body = await request.json(); 
        const { name, minting, price, imgUrl } = body;

        // Validate the data
        if (!name || !minting || !price || !imgUrl) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Create and save the new art document
        const newArt = new ArtModel({ name, minting, price, imgUrl });
        await newArt.save();

        return NextResponse.json(newArt, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}