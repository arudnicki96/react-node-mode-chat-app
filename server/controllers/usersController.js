const Prisma = require('@prisma/client');
const {PrismaClient} = Prisma;
const prisma = new PrismaClient();


exports.getAllUsers = async (req, res) => {
    const users = await prisma.users.findMany();
    res.status(200).json({
        status: "success",
        users: users
    })
}
exports.createUser = async (req, res) => {
    const {birthDate, emailAddress, gender, name, password } = req.body;
    const account = await prisma.users.create({
        data: {
            birthDate,
            emailAddress,
            gender,
            name,
            password
        }
    })

    res.status(201).json({
        status: "success",
        account:
            account
        });
}

exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    const user = await prisma.users.delete({
        where: {
            id : id
        }
    })

    res.status(200).json({
        status: "success",
        message: `User with id ${id} deleted successfully`
    })
}
