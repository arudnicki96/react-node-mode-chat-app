
const app = require('./app');
const prisma = require('./prisma/prismaClient')

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 6099

prisma();

app.listen(port, ()=> {
    console.log(`App running on port ${port}`)
})