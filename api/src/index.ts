import { ApolloServer } from "apollo-server";

const typeDefs = `
  type Query {
    info: String!
  }
`

const resolvers = {
  Query: {
    info: () => `This is the API of Platzi Node GrapthQL`
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => console.log(`Server is on ${url}`))
