import prisma from "../../../prisma";
export const connectToDb = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to database!!!!!!");
    } catch (error: any) {
        console.log(error);
        return new Error(error.message);
    }
}