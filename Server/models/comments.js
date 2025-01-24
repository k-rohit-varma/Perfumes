import express from 'express'
import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    commentId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "perfume"
    },
    data : {
        type : [String],
        default : null
    },
    uploadedAt: {
        type: Date,
        default: Date.now
      }
})

module.exports = mongoose.model("comment",commentSchema)