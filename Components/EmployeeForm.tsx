import React from 'react'

const EmployeeForm = () => {
  return (
    <div >
      <form action='' className='w-[60%] ml-[15rem] h-[40rem] p-7 bg-slate-50'>
        <div className=''>
            <h1 className='non-italic text-xl text-center font-extrabold font-sans mb-8'>Employee Form</h1>
            <div className=' ml-52'>
            <label htmlFor="Name" className=' text-lg font-semibold'>Name</label><br />
            <input type="text" className='w-[20rem]  h-9  pl-[10px] mt-3 mb-3' id='name' name='name'/><br />
            <label htmlFor="Address" className=' text-lg font-semibold'>Address</label><br />
            <input type="text" className='w-[20rem]  h-9 pl-[10px] mt-3 mb-3 ' id='address' name='address'/><br />
            <label htmlFor="phoneNumber" className=' text-lg font-semibold'>Phone Number</label><br />
            <input type="number" className='w-[20rem]  h-9 pl-[10px] mt-3 mb-3' id='phoneNumber' name='phoneNumber'/><br />
            <label htmlFor="Age" className=' text-lg font-semibold'>Age</label><br />
            <input type="number" className='w-[20rem]  h-9 pl-[10px] mt-3 mb-20' id='age' name='age'/><br />
            <button className='bg-green-500 p-2 rounded hover:bg-blue-500 ml-24' id='submit'>Submit</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default EmployeeForm
