const InfoTable = (props) => {
  return (
    <table className="table table-dark">
        <thead>
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Fees</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {props.studentData.length > 0 ? (
                props.studentData.map((e)=>(
                    <tr key ={e._id}>
                        <td>{e.Name}</td>
                        <td>{e.Course}</td>
                        <td>{e.Email}</td>
                        <td>{e.Contact}</td>
                        <td>{e.Fees}</td>
                        <td>
                            <button
                            className="btn btn-success"
                            onClick={(event) => {
                                props.editData(e);
                            }}
                            >
                            Edit
                            </button>
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={(event) => {
                                    props.deleteData(e);
                                }}
                                >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))
            ):(
                <tr>No Data</tr>
            )}
        </tbody>
    </table>   
  )
}

export default InfoTable