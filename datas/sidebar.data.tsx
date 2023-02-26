import {AiFillHome} from "react-icons/ai";
import {BiMessageSquareAdd} from 'react-icons/bi';
import {IoMdContacts} from 'react-icons/io';
import {BiUserCircle} from 'react-icons/bi';
import {FaMoneyBillAlt} from 'react-icons/fa';


interface SidebarInterface{
    title:string;
    icon:React.ReactNode
    link:string;
}

const sidebarData:SidebarInterface[]=[
    {
        title:'Home',
        icon:<AiFillHome/>,
        link:'/home'
    },
    {
        title:'About',
        icon:<BiMessageSquareAdd/>,
        link:'/about'
    },
    {
        title:'Employee',
        icon:<BiUserCircle/>,
        link:'/employee'
    },
    {
        title:'Money',
        icon:<FaMoneyBillAlt/>,
        link:'/money'
    },
    {
        title:'Contact Us',
        icon:<IoMdContacts/>,
        link:'/contact'
    },

]

export default sidebarData;