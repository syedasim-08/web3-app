import { artsData } from "@/utils/data";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        "hello" : "world"
    })
}