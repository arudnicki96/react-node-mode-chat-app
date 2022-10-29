const Prisma = require('@prisma/client')
const {PrismaClient} = Prisma
const prisma = new PrismaClient();


async function main() {
    await prisma.$connect()
    const allUsers = await prisma.users.findMany();
console.log(allUsers)}

module.exports = main
