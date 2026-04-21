const router=require("express").Router();
const Todos=require('../models/Todo.js');

router.get('/',async(req,res)=>{
    const todos=await Todos.find();
    res.json(todos);
});

router.post('/',async(req,res)=>{
    const todo=await Todos.create({title:req.body.title});
    res.json(todo);
});

router.get('/:id',async(req,res)=>{
    const todo=await Todos.findById(req.params.id);
    if(!todo) return res.status(404).json({
        message:'Not found'
    });
    res.json(todo);

});

router.put('/:id',async(req,res)=>{
    const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!todo) return res.status(404).json({message:'Not found'});
    res.json(todo);
});

router.delete('/:id',async(req,res)=>{
    const todo=await Todo.findByIdAndDelete(req.params.id);
    if(!todo) return res.status(404).json({
        message:'Not found'
    });
    res.json({message:'Deleted'});
});

module.exports=router;