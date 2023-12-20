const express=require('express')
const router=express.Router();
const controller=require('./controller')

router.get('/users',controller.getUsers)
router.put('/updateuser',controller.updateUser)
router.post('/adduser',controller.addUser)
router.delete('/deleteuser',controller.deleteUser)

module.exports=router;