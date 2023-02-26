import Mainlayout from '@/layouts/Mainlayout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EmployeeForm, { Employee } from './EmployeeForm';
import { employeeUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.apis';
import Container from './Container';


const breadCrumb:{title:string;link:string}[]=[
    {
        title:"Home",
        link:"/employee",
    },
    {
        title:"Employee",
        link:"/employee",
    },
    {
        title:"Update",
        link:"/employee",
    },
]

const Update = () => {
    const router=useRouter();
    const[employee,setEmployee] =useState<Employee>();

    const fetchEmployee =async ()=>{
        const id = router.query.id; //id from url
        const { data, error }=await asyncGet(employeeUrl.get + "/" + id);
        if(data && !error){
            setEmployee(data);
        }else{}
    };

    useEffect(()=>{
        fetchEmployee();
    },[router.isReady]);
  return (
    <Mainlayout>
        <Container>
            <EmployeeForm editData={employee}/>
        </Container>
    </Mainlayout>
  )
}

export default Update
