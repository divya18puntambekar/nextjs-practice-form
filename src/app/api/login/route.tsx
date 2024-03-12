import { connectToDb } from "@/app/utils";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import bycrpt from "bcrypt";
export const POST = async (req: Request) => {
    try {
        const { username, password } = await req.json();

        if (!username && !password) {
            return NextResponse.json({ error: "Fields are requried !"}, {status: 422})
        }
        await connectToDb();
        const existingUser = await prisma.users.findFirst({
            where: {
                username
            }
        });
        if(!existingUser) {
            return NextResponse.json({ error: "User not found !"}, {status: 404})
        }
        const isPasswordCorrect = await bycrpt.compare(
            password,
            existingUser.password
        )
        if(!isPasswordCorrect) {
            return NextResponse.json({ error: "Invalid credentials !"}, {status: 401})
        }
        return new Response(JSON.stringify({message: "Logged in"}), { status: 201 });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}