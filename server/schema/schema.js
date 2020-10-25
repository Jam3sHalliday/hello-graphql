const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLString } = graphql;

//dummy data
const books = [
    { name: 'book 1', genre: 'genre 1', id: '1' },
    { name: 'book 2', genre: 'genre 2', id: '2' },
    { name: 'book 3', genre: 'genre 3', id: '3' },
]

const BookType = new graphql.GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                //code to get data from db/ other source
                return _.find(books, { id: args.id });
            }
        }
    }
})

module.exports = new graphql.GraphQLSchema({
    query: RootQuery
})