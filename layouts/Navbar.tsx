import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";
interface Props{
    toggle:boolean;
    setToggle:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({toggle,setToggle}:Props){
    return (
        <div className={`fixed ${!toggle ? " pl-0 ml-[17rem]" : "ml-[5rem]"} p-5 bg-white z-[999999] text-black shadow-md flex justify-between left-0 right-0`}>
            <div className={` ${!toggle ? "ml-10" : "ml-1"} `}>
                <span onClick={() => setToggle((t) =>!t)}>
                    <BsList size={30}/></span>
            </div>
        <div className="flex gap-3 items-center">
            <span className="text-xl">Sabita</span>
            <span ><BiUserCircle size={30}/></span>
        </div>
    </div>
    )
}