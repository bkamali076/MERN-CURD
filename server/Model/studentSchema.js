import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    Name:{
        type:String,
        unique:true,
        require:true
    },
    Course:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Contact:{
        type:Number,
        require:true
    },
    Fees:{
        type:Number,
        
    },
})
export default mongoose.model("StudentDetailsCrud",studentSchema)