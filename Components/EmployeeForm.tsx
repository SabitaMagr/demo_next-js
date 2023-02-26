import { useRouter } from 'next/router';
import React, { useState ,useEffect} from 'react';
import {useForm} from "react-hook-form";
import { asyncGet, asyncPost, asyncPut } from '@/apis/rest.apis';
import { employeeUrl } from '@/apis/list.api';

interface FormProps{
  editData?:Employee;
}
 
export interface Employee{
  id:number;
  name:string;
  email:string;
  address:string;
  phone:number;
  age:number;
  gender:string;
}
const EmployeeForm = ({editData}:FormProps) => {
  const {
    register,handleSubmit,setValue,formState:{errors},
  }=useForm<Employee>();
  const router= useRouter(); //function that is call after submit
  const saveEmployee=async(value :Employee)=>{
    //api call

    const payload={
      ...value,
      id:new Date().getTime(),
    };
    if(editData && editData?.id){
      //update
      const{ data, error}= await asyncPut(
        employeeUrl.put + editData.id,payload
      );
      if(data && !error)
      {
        alert("Update Success");
        router.push("/employee");
      }
    }else{
      const {data, error} =await asyncPost(employeeUrl.post,payload)
      if(data && !error){
        alert("Save Success!");
        router.push("/employee");
      }
    }
  };

  useEffect(()=>{
      if(editData){
        setValue("name",editData?.name); 
         setValue("address",editData?.address);
        setValue("age",editData?.age);
        setValue("phone",editData?.phone);
        setValue("email",editData?.email);
        setValue("gender",editData?.gender);
        setValue("id",editData?.id);

      }
  },[editData]);
  return (
    <div className='flex bg-white mx-auto p-16 justify-center w-[100%]' >
      <form action='' className='flex-col flex gap-6' onSubmit={handleSubmit(saveEmployee)}>
        <div className=' relative items-center'>
           <div className='flex gap-2'>
              <label htmlFor="" className='text-xl w-[30%]'>Name:</label>
              <input type="text" placeholder='Enter Name' {...register("name",{required:true})} 
               className="outline-none px-2 border-gray-400  border py-1.5" />
           </div>
           {
            errors?.name && (
              <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                Name is required
              </small>
            )}
        </div>
        <div className=''>
           <div className='flex gap-2 items-center'>
              <label htmlFor="" className='text-xl w-[30%]'>Email:</label>
              <input type="text" placeholder='Enter Email' {...register("email",{required:{value:true,message:"Email is Required"},
              pattern:{
                message:"Invalid Email",
                value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              },
            })} 
               className="outline-none px-2 border-gray-400  border py-1.5" />
           </div>
           {
            errors?.email && (
              <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                {errors?.email?.message}
              </small>
            )}
        </div>
        <div className=''>
           <div className='flex gap-2 items-center'>
              <label htmlFor="" className='text-xl w-[30%]'>Address:</label>
              <input type="text" placeholder='Enter Address' {...register("address",{required:{value:true,message:"Address is Required"},
              max:{
                value:20,
                message:"Address must be less than 20",
              },
            })} 
               className="outline-none px-2 border-gray-400  border py-1.5" />
           </div>
           {
            errors?.address && (
              <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                {errors?.address?.message}
              </small>
            )}
        </div>
        <div className=''>
           <div className='flex gap-2 items-center'>
              <label htmlFor="" className='text-xl w-[30%]'>Phone No:</label>
              <input type="text" placeholder='Enter Phone No' {...register("phone",{required:{value:true,message:"Phone No is Required"},
              pattern:{
                value:/^[0-9]{10}$/,
                message:"Phone No must be 10 digit",
              },
            })} 
               className="outline-none px-2 border-gray-400  border py-1.5" type="number" />
           </div>
           {
            errors?.phone && (
              <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                {errors?.phone?.message}
              </small>
            )}
        </div>   
        <div className=''>
            <div className='flex gap-2 items-center'>
               <label htmlFor="" className='text-xl w-[30%]'>Age:</label>
               <input type="number" placeholder='Enter Age' {...register("age",{required:{value:true,message:"Age is Required"},
             })} 
                className="outline-none px-2 border-gray-400  border py-1.5" />
            </div>
            {
             errors?.age && (
               <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                 {errors?.age?.message}
               </small>
             )}
        
        </div>
        <div className=''>
            <div className='flex gap-2 items-center'>
               <label htmlFor="" className='text-xl w-[30%]'>Gender:</label>
               <select
                {...register("gender", {
                  validate: (value) => value != "null",
                })}
                className="px-2 bg-inherit outline-none w-[70%] border-gray-400 border py-1.5"
              >
                <option selected value={"null"}>
                  choose Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
            {
             errors?.gender && (
               <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                 Choose Gender
               </small>
             )}
        </div>
        <div className='flex justify-center'>
            <button type="submit" className=' bg-purple-700 text-white py-2 px-8 rounded-md'>
              {editData ? "Update" : "Save"}
            </button>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm
