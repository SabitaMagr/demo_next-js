import sidebarData from "@/datas/sidebar.data"
import Link from "next/link"

export default function SlideBar(){
    return (
        <div className="min-h-screen text-white w-[20%] bg-purple-800 fixed inset-0`">
        <div className="text-white">
            <h1 className="text-3xl px-12 mb-3">Admin</h1>
        </div>
        <div className="">
         <ul className="">{
            sidebarData.map((data,index)=>{
                return(
                <Link key={index} rel="stylesheet" href={data?.link} >
            <li key ={index} className="p-2  text-white hover:bg-purple-900  px-10 flex gap-2">
                <span className="mr-2">{data?.icon}</span> 
                <span>{data.title}</span>
            </li>
          </Link>
                )
            })
        }
            
        </ul>
    </div>
    </div>
    )
}