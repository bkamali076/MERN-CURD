import users from "../Model/studentSchema.js"
//http://localhost:5000/info/cs
export const createStudent = async(req,res) => {
    const data = new users({
        Name    :req.body.na,
        Course  :req.body.cou,
        Email   :req.body.em,
        Contact :req.body.co,
        Fees    :req.body.fe,
    })
    console.log("Create the db",req.body)
    try{
        await data.save(); 
        res.status(200).json(data)
    }catch(err){
        // res.status(404).json("UserName Is Already Existed ")
    }

}
export const getStudent = async(req,res)=>{
    console.log("Get Student")
    try{
        const details = await users.find()
        res.status(200).json(details)
    }catch(err){
        console.log(err)
    }
}
export const updateStudent =async(req,res)=>{
    console.log("Student is updated")
    try{
        const upData= await users.findByIdAndUpdate(
            {_id:req.body._id},
            {
                $set:{
            
                    Name    :req.body.na,
                    Course  :req.body.cou,
                    Email   :req.body.em,
                    Contact :req.body.co,
                    Fees    :req.body.fe,
                }
            },{new:true}
        )
        res.status(200).json(upData)
    }catch(err){
        console.log(err)
    }

}
export const delStudent =async(req,res)=>{
    console.log("delete student",req.params.id)
    try{
        await users .findByIdAndDelete(req.params.id);
        res.status(200).json("student deleted")
    }catch(err){
        console.log(err)
    }
}