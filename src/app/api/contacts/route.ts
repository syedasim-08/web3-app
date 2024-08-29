
import ContactModel from "@/lib/models/Contact";
import dbConnect from "@/lib/mongo";
import { NextResponse } from "next/server";

export async function GET(){
         await dbConnect();


try {
    const contacts = await ContactModel.find({});
    return NextResponse.json(contacts);
} catch (err: any) {

        return NextResponse.json({ error: err.message});
    
}
        
}

