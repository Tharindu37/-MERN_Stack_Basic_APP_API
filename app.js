// const controller=require('./controller')

// app.use(express.urlencoded({extended:true}));


// app.get('/users',(req,res)=>{
//     controller.getUsers(users=>{
//         res.send(users)
//     })
// })

// app.get('/user',(req,res)=>{
//     const id=req.query.id;
//     controller.getUserById(id,user=>{
//         res.send(user)
//     })
// })

// app.get('/users',(req,res)=>{
//     controller.getUsers((req,res,next)=>{
//         res.send();
//     })
// })

// app.post('/createuser',(req,res)=>{
//     controller.addUser((req.body,(callback)=>{
//         res.send();
//     }))
// })

// app.put('/updateuser',(req,res)=>{
//     controller.updateUser((req.body,(callback)=>{
//         res.send(callback);
//     }))
// })

// app.delete('/deleteuser',(req,res)=>{
//     controller.deleteUser((req.body,(callback)=>{
//         res.send(callback);
//     }))
// })
// module.exports=app;