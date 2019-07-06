const expres=require('express');
const graphqlHTTP=require('express-graphql');
const schema=require('./schema/schema');
const app=expres();
 //middleware
app.use('/graphql', graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(4000,()=>{
    console.log('now listening to request');
})