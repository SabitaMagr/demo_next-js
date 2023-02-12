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
        link:'https://react-icons.github.io/react-icons/search?q=contact'
    },
    {
        title:'About',
        icon:<BiMessageSquareAdd/>,
        link:'https://web.whatsapp.com/'
    },
    {
        title:'Employee',
        icon:<BiUserCircle/>,
        link:'https://web.whatsapp.com/'
    },
    {
        title:'Money',
        icon:<FaMoneyBillAlt/>,
        link:'/contact'
    },
    {
        title:'Contact Us',
        icon:<IoMdContacts/>,
        link:'/contact'
    },

]

export default sidebarData;