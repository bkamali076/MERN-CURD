import axios from 'axios';
import InfoForm from './form'
import InfoTable from './table'
import { useEffect, useState } from 'react';



const App=()=>{
  const [allStudentData,setData]      = useState([])
  const [editStudentInfo,setEditData] = useState([])

  const createStudent = (data) => {
    if (!data.isEdit) {
      axios
        .post("http://localhost:5000/info/cs", data)
        .then((res) => {
          console.log("student created");
          getAll();
        })
        // .catch((err) => {
        //   if (err.response && err.response.status === 409) {
        //     // User with the same name already exists, show a toast
        //     const toastOptions = {
        //       position: "top-right",
        //       autoClose: 5000,
        //       hideProgressBar: false,
        //       closeOnClick: true,
        //       pauseOnHover: true,
        //       draggable: true,
        //       progress: undefined,
        //       theme: "dark",
        //     };
  
        //     toast.error("A student with the same name already exists. Please use a different name.", toastOptions);
        //   } else {
        //     console.error("An error occurred while creating the student:", err);
        //   }
        // });
    } else{
      axios.put("http://localhost:5000/info/up",data)
        .then((res)=>{
          console.log("student updated")
          getAll()
        })      
    }
  }
  const delStudentData =(data) => {
    var option = window.confirm (`Are you sure want to delete ${data.Name}`)
    if (option){
      axios.delete(`http://localhost:5000/info/del/${data._id}`)
        .then((res)=>{
          console.log("students deleted");
          getAll()
        })
    }
  } 
  useEffect(()=>{
    //toast.success('useris alreasdy exist');
    getAll()
  },[])
  const getAll = () =>{
    axios.get("http://localhost:5000/info/get")
      .then((res)=>{
        //set the data in get request already declred in use state. 
        setData(res.data)
    })
  }
  const editStudentData = (data)=>{
    setEditData(data)
  }
  return(
    <div className='container mt-4'>
      <div className="row">
        <div className='col-3'>
          <InfoForm 
            createData={createStudent} 
            setEditInfo ={editStudentInfo}/>  
        </div>
        <div className='col-9'>
          <InfoTable studentData={allStudentData} editData = {editStudentData} deleteData= {delStudentData}/>  
        </div>
        
        
      </div>
    </div>

  );

}

export default App;


