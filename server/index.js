const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})