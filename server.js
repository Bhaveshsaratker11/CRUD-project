const app = require('./src/app')


app.listen(3000,(req,res)=>{
    console.log(`server is running on http://localhost:${3000}`);
})