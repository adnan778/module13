import { NextRequest, NextResponse } from "next/server";
import { headers } from "../../../next.config";

export function GET(){
   return NextResponse.json(
    {},
    {
        status:200,
        headers:{'token':'xyz'}
    }
   )
}