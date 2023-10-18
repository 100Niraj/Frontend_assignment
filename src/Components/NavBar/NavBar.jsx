import { useState } from "react";
import "./Navbar.css"

const NavBar = ({selectedGroup, setSelectedGroup, selectedOrdering, setSelectedOrdering}) => {
    const [display, setDisplay] = useState(false);
    return (
        <>
            <div className="navbar-parent">
                <div className="navbar-dropdown" onClick={()=>setDisplay(!display)}>
                    <span>DISPLAY</span>
                    <span><i class="fa fa-solid fa-angle-down"></i></span>
                </div>
                <div className="navbar-dropdown-option" style={display ? {}:{display: "none"}}>
                    <div className="dropdown-set">
                        <span>Grouping</span>
                        <select onChange={(e)=>setSelectedGroup(e.target.value)} value={selectedGroup}>
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="dropdown-set">
                        <span>Ordering</span>
                        <select onChange={(e)=>setSelectedOrdering(e.target.value)} value={selectedOrdering}>
                            <option value="title">Title</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;
