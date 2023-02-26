import sidebarData from "@/datas/sidebar.data"
import Link from "next/link"
import { useRouter } from "next/router";
interface Props{
    toggle:boolean;
}
export default function SlideBar({toggle}:Props){
    const router =useRouter();
    return (
        <div className={`min-h-screen text-white z-50  ${ toggle ? 'w-5%' : 'w-20%'} bg-purple-600 fixed inset-0`}>
        <div className="text-white flex justify-center">
            {!toggle &&
                <h1 className="text-3xl  pb-2 pt-4 font-bold text-center">Admin</h1>
            }
           
        </div>
        <div className="mt-2">
         <ul className="">{
            sidebarData.map((data,index)=>{
                return(
                <Link key={index} rel="stylesheet" href={data?.link} >
            <li key ={index} className={` ${router.asPath == data.link ? " bg-purple-900" :""} p-2  text-white hover:bg-purple-900 items-center  px-5 flex gap-2`}>
                <span className="mr-2">{data?.icon}</span> 
                {!toggle &&
                    <span>{data.title}</span>
                }
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