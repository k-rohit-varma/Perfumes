import commentModel from "../models/comments"

module.exports.findPerfume = async(id)=>{
    const perfume = await commentModel.find({_id:id})
    return perfume;
}