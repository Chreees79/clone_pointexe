import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./services/sendMail";

export async function POST(req: NextRequest) {
    try {
        const formData = req.body;
        if (formData) {
            await sendMail(formData);
        }
        return NextResponse.json(
            { success: "Data received with success" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "An error occurred" },
            { status: 500 }
        );
    }
}
