const EmployeeTable=()=>{
    return(
        <div>
            <table className="w-full mt-3">
                <thead className="p-3 text-white bg-gray-600 ">
                    <tr>
                        <th className="p-3">S.N</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">Phone Number</th>
                        <th className="p-3">Age</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {
                        [0,0,0,0,0].map((data,i)=>{
                            return(
                                <tr className="bg-gray-300 p-3">
                                    <td className="p-3 text-center">1</td>
                                    <td className="p-3 text-center">Sabita</td>
                                    <td className="p-3 text-center">Baneshwor</td>
                                    <td className="p-3 text-center">986442656562</td>
                                    <td className="p-3 text-center">145</td>
                                    <td className="p-3 text-center">Edit</td>


                                </tr>
                            )
                        })
                    }

                </tbody>
                
            </table>
        </div>
    )
}
export default EmployeeTable