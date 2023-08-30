import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";


export function GET(){
return NextResponse.json(
    {
        "message":"Welcome to our api",
        "varsion":"1.0"
    }
    
)
redirect("/profile");
}