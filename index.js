const express= require('express');
const cors=require('cors');
const mongoose=require('mongoose')
const router=require('./router')

const app=express();
const port=3001;
const host='127.0.0.1'

app.use(cors());
app.use(express.json())

const uri='mongodb+srv://tharindu:0758888345Tt@cluster0.rzbz1us.mongodb.net/?retryWrites=true&w=majority'

const connect=async()=>{
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB')
    }catch(error){
        console.log('MongoDB Error: ',error)
    }
}

connect()

const server=app.listen(port, host,()=>{
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api',router)