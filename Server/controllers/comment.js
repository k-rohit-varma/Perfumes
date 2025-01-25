
const mongoose = require('mongoose')
const perfumeModel = require('../models/perfume')


module.exports.comment =async (req,res)=>{
    
    try{
        const id = req.body._id;
        const cmt = req.body.text;
        const date = req.body.uploadedAt;
        const perfume =await perfumeModel.findOne({_id:id})
        perfume.comment.push(cmt)
        await perfume.save()
        res.status(201).send(perfume.comment)
    }catch(err)
    {
        res.status(500).send(`some thing went wrong in comment`)
    }
}

module.exports.getAllComments = async (req, res) => {
    try {
      const id = req.params.id;
      const perfume = await perfumeModel.findOne({ _id: id });
  
      if (!perfume) {
        return res.status(404).send("Perfume not found");
      }
  
      res.status(200).send(perfume.comment);
    } catch (err) {
      console.error(err);
      res.status(500).send("Something went wrong while fetching comments");
    }
  };