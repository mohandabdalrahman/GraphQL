const expres=require('express');
const graphqlHTTP=require('express-graphql');
const app=expres();
 //middleware
app.use('/graphql', graphqlHTTP({
    
}))

app.listen(4000,()=>{
    console.log('now listening to request');
})