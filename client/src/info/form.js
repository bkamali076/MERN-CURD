import {useEffect, useState} from 'react';
const InfoForm =(props) =>{
    const [id,setid]           =useState("")
    const [Name,setName]       =useState("")
    const [Course,setCourse]   =useState("")
    const [Email,setEmail]     =useState("")
    const [Contact,setContact] =useState("")
    const [Fees,setFees]       =useState("")
    const [isEdit ,setEdit]    =useState(false)
    


    const infoSubmit =(event) =>{
        if (!isEdit){
            const data ={
                isEdit : isEdit,
                na     :Name,
                cou    :Course,
                em     :Email,
                co     :Contact,
                fe     :Fees,
            }
            props.createData(data)
        } else {
            const data ={
                isEdit : isEdit,
                _id    :id,
                na     :Name,
                cou    :Course,
                em     :Email,
                co     :Contact,
                fe     :Fees,
            }
            props.createData(data)   

        }
        
    };
    useEffect(()=>{
        console.log("use Id:",props.setEditInfo._id)
        if(props.setEditInfo._id != null){
            setid(props.setEditInfo._id)
            setName(props.setEditInfo.Name)
            setCourse(props.setEditInfo.Course)
            setEmail(props.setEditInfo.Email)
            setContact(props.setEditInfo.Contact)
            setFees(props.setEditInfo.Fees)
            setEdit(true)

        }
    },[props])
    console.log("ID:" ,id)

    


    return(
        <form onSubmit={infoSubmit}  autoComplete='off'>
            <div className="form-group-dark">
                <label>Name</label>
                <input type="text" 
                    name="Name"
                    className="form-control"
                    onChange={(e)=> setName(e.target.value)}
                    value={Name} 
                    required 
                />
            </div>
            <div>
                <label>Course</label>
                <input type="text" 
                    name="Course"
                    className="form-control"
                    onChange={(e)=> setCourse(e.target.value)}
                    value={Course}
                    required  
                />
            </div>
            <div>
                <label>Email</label>
                <input type="email" 
                    name="Email"
                    className="form-control"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={Email} 
                    required 
                />
            </div>
            <div>
                <label>Contact</label>
                <input type="Number" 
                    name="Contact"
                    className="form-control"
                    onChange={(e)=> setContact(e.target.value)}
                    value={Contact}
                    
                    required  
                />
            </div>
            <div>
                <label>Fees</label>
                <input type="Number" 
                    name="Fees"
                    className="form-control"
                    onChange={(e)=> setFees(e.target.value)}
                    value={Fees}  
                    required
                    
                />
            </div>
            <br></br>
            <button type='submit' className='btn btn-success'>
                {isEdit ? "Update":"Create"}
            </button>
            
        </form>
    )
}

export default InfoForm