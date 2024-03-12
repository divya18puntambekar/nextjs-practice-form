import { connectToDb } from "@/app/utils";
import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const POST = async (req: Request) => {
    try {
        const { fname, lname, username, contact, gender, password } = await req.json();
        if (!fname || !lname  || !password) {
            return NextResponse.json({ error: "Fields are requried !"}, {status: 422})
        }
        await connectToDb();
        const hashedPassword = await bcrypt.hash(password, 10);
        const existingUser = await prisma.users.findFirst ({ where: {username} });
        if(existingUser){
            return NextResponse.json({ error: "User already exists !"}, {status: 409})
        }
        const users = await prisma.users.create({ data: { fname, lname, username, contact, gender, password: hashedPassword } })
        return NextResponse.json( {users}, {status: 201});
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}

export const PUT = async (req: Request) => {
    try {
        const { fname, lname, username, password, gender, contact } = await req.json();
        if(!username){
            return NextResponse.json({ error: "Username is requried !"}, {status: 422});
        }
        await connectToDb();
        const updatedUsers = await prisma.users.update({ 
            where: {username}, 
            data: {fname, lname, username, password, contact, gender}
        });
        if(updatedUsers){
            return NextResponse.json( {updatedUsers}, {status: 201});
        }
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}