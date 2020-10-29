const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mlab-url-after-you-create-it-but-mlab-is-fucking-lag/god-damn-it')
mongoose.connect.one('open', () => {
    console.log('connect to db');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => { console.log('now listening for request on port 4000')});

