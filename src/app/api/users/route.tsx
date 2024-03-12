import { connectToDb } from "@/app/utils";
import prisma from "../../../../prisma";
export const GET = async (req: Request) => {
    try {
        await connectToDb();
        const users = await prisma.users.findMany();
        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}