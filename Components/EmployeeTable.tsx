import { employeeUrl } from "@/apis/list.api";
import { asyncDelete, asyncGet } from "@/apis/rest.apis";
import Link from "next/link";
import { useState,useEffect } from "react"
import { Employee } from "./EmployeeForm"

const EmployeeTable=()=>{
    const[employeeList, setEmployeeList] =useState<Employee[]>([]);
    const[filterEmployeeList,setFilterEmployeeList]=useState<Employee[]>([]);

    const fetchAllEMployee = async ()=>{
        const {data,error} =await asyncGet(employeeUrl.get)
        if(data && !error){
            setEmployeeList(data as Employee[]);
        }
    };
    const deleteEmployee =async (id:number) =>{
        const value=window.prompt("Are you sure you want to delete?");
        if(value == 'yes'){
            const {data,error}=await asyncDelete(employeeUrl.delete+id);
            if(data && !error){
                setEmployeeList((c)=>c.filter((f)=>f.id !=id));
            }
        }
    }

    const filterSearch = (e: any) => {
        const value = e.target.value;
        if(value){
            setFilterEmployeeList(
                employeeList.filter(
                (f) => f.name?.toString().includes(value) ||
                f.address?.toString().includes(value))
            )  ;
        }else{
            setFilterEmployeeList(employeeList);
        }
    };

    useEffect(() => {
        fetchAllEMployee();
      }, []);
    return(
        <div>
            <div className="flex justify-between my-3 mt-4">
                <div>
                    <input type="text" onChange={filterSearch} 
                    className=" border boredr-gray-400 rounded-md outline-none p-1.5"/>
                </div>
            </div>
            <div className="bg-white p-2">
                        {/* {JSON.stringify(employeeList.length)} */}
            <table className="w-full mt-3">
                <thead className="p-3 text-white bg-gray-600 ">
                    <tr>
                        <th className="p-3">S.N</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Address</th>
                        <th className="p-3">Phone Number</th>
                        <th className="p-3">Age</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>
                <tbody className="">
                    {filterEmployeeList ?.length > 0 ?(
                        filterEmployeeList?.map((data,i)=>{
                            return(
                                <tr className="bg-gray-300 p-3">
                                    <td className="p-3 text-center">{i+1}</td>
                                    <td className="p-3 text-center">{data.name}</td>
                                    <td className="p-3 text-center">{data.email}</td>
                                    <td className="p-3 text-center">{data.address}</td>
                                    <td className="p-3 text-center">{data.phone}</td>
                                    <td className="p-3 text-center">{data.age}</td>
                                    <td className="p-3 text-center ">
                                        <Link href={`/employee/${data.id}`}>
                                            <button className=" outline-none bg-green-600 px-5 py-0.5 rounded-md text-sm text-white mr-3">
                                                Edit
                                            </button>
                                        </Link>
                                            <button onClick={()=>deleteEmployee(data.id)} className=" outline-none bg-red-600 px-2 py-0.5 rounded-md text-sm text-white">
                                                Delete
                                            </button>
                                    </td>


                                </tr>
                            );
                        })
                    ):(
                        <tr>
                            <td colSpan={6} className=" text-center py-3" >
                                No data found !
                            </td>
                        </tr>
                    )}
                </tbody>               
            </table>
        </div>
        <div className="flex justify-end gap-2 absolute bottom-0 right-0">
          <button className="p-1 px-2 border border-gray-700  rounded-md">
            1
          </button>
          <button className="p-1 px-2 border border-gray-700  rounded-md">
            2
          </button>
          <button className="p-1 px-2 border border-gray-700  rounded-md">
            3
          </button>
        </div>
    </div>

    );
};
export default EmployeeTable