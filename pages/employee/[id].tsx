import { asyncGet } from '@/apis/rest.apis';
import EmployeeForm from '@/Components/EmployeeForm';
import Update from '@/Components/Update';
import { useRouter } from 'next/router';
import React,{useEffect} from 'react'

const update = () => {
  return (
    <div>
      <Update/>
    </div>
  )
}

export default update;
