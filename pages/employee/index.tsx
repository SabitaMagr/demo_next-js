import Container from "@/Components/Container"
import EmployeeTable from "@/Components/EmployeeTable"
import Mainlayout from "@/layouts/Mainlayout"
import Link from "next/link"

const index=()=>{
    return(
        <Index/>
    )
}

export default index
const breadCrumb:{title:string,link:string}[]=[
    {
      title:'Home',
      link:'/employee'
    },
    {
      title:'Employee',
      link:'#'
    },
  ]

const Index=()=>{
    return(
        <Mainlayout title='employee'>
            <Container 
            breadCrumb={breadCrumb}
            title="employee">
                <div className="flex justify-end">
                    <Link href="/employee/create">
                        <span className="bg-green-500 text-white hover:bg-green-800 rounded-md px-3 py-2">Add Employee </span>
                    </Link>
                </div>
                <EmployeeTable />
            </Container>
        </Mainlayout>
    )
}