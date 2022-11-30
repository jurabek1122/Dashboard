import { useState } from "react"
import { RiArrowDropRightLine } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom'

const SidebarItem = ({item}) => {
    const [toggle, setToggle] = useState(false)
    const location = useLocation()

    if(item.childrens){
        return (
            <div className={toggle ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
            <div className={location.pathname.toString().includes(item.path.toString()) ? 'active' : null}>

                     <span className="menu-icon">{item.icon}</span>
                     <span>{item.title}</span>
                     <RiArrowDropRightLine className="toggle-btn" onClick={() => setToggle(!toggle)} />
                 </div>
                 </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <NavLink activeClassName='active' to={item.path} className="sidebar-item plain">
                <div className="sidebar-title">
                     <span className="menu-icon">{item.icon}</span>
                     <span>{item.title}</span>
                 </div>
            </NavLink>
        )
    }
}

export default SidebarItem;