import { useEffect, useRef, useState } from "react";
import "./Navbar.css"

const NavBar = ({ selectedGroup, setSelectedGroup, selectedOrdering, setSelectedOrdering }) => {
    const [display, setDisplay] = useState(false);
    const optionsRef = useRef(null);

    useEffect(() => {
        let handler = (e) => {
            if (optionsRef.current)
                if (! optionsRef.current.contains(e.target))
                    setDisplay(false);
        }

        document.addEventListener("mousedown",handler);
    }, []);
    return (
        <>
            <div className="navbar-parent">
                <div className="navbar-dropdown" onClick={() => setDisplay(!display)}>
                    <span>DISPLAY</span>
                    <span><i class="fa fa-solid fa-angle-down"></i></span>
                </div>
                <div className="navbar-dropdown-option" style={display ? {} : { display: "none" }} ref={optionsRef} >
                    <div className="dropdown-set">
                        <span>Grouping</span>
                        <select
                            onChange={(e) => {
                                setSelectedGroup(e.target.value);
                                // setDisplay(display => !display);
                            }}
                            value={selectedGroup}
                        >
                            <option value="status">Status</option>
                            <option value="user">User</option>
                            <option value="priority">Priority</option>
                        </select>
                    </div>
                    <div className="dropdown-set">
                        <span>Ordering</span>
                        <select
                            onChange={(e) => {
                                setSelectedOrdering(e.target.value);
                                // setDisplay(display => !display);
                            }}
                            value={selectedOrdering}
                        >
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
