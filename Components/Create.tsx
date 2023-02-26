import Mainlayout from '@/layouts/Mainlayout';
import React from 'react'
import Container from './Container';
import EmployeeForm from './EmployeeForm';

const breadCrumb:{ title:string; link : string}[]=[
    {
        title:"Home",
        link:"/employee",
    },
    {
        title:"Employee",
        link:"/employee",
    },
    {
        title:"Create",
        link:"/employee/create",
    },
]

const Create = () => {
  return (
    <Mainlayout>
        <Container breadCrumb={breadCrumb} title="">
            <EmployeeForm/>
        </Container>
    </Mainlayout>
  )
}

export default Create
