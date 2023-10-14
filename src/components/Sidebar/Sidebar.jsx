import React from 'react';
import { Link } from 'react-router-dom';
 
const Sidebar = ({sidebarfilter}) => {
    return (
        <div className="sidebar">
        <nav>
            <ul className="space-y-4">
                <li>
                    <a  onClick={() => sidebarfilter("")}  className="main-menu menu-active cursor-pointer" id="lws-alljobs-menu">
                        <i className="fa-solid fa-briefcase"></i>
                        <span> All Available Jobs</span>
                    </a>
                    <ul className="space-y-6 lg:space-y-2 ">
                        <li onClick={() => sidebarfilter("Internship")}>
                            <a className="sub-menu cursor-pointer"  id="lws-internship-menu">
                                <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                                Internship
                            </a>
                        </li>
                        <li onClick={() => sidebarfilter("Full Time")}>
                            <a className="sub-menu cursor-pointer"  id="lws-fulltime-menu">
                                <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                                Full Time
                            </a>
                        </li>
                        <li onClick={() => sidebarfilter("Remote")}>
                            <a className="sub-menu cursor-pointer"   id="lws-remote-menu">
                                <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                                Remote
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/addJob" className="main-menu" id="lws-addJob-menu">
                        <i className="fa-solid fa-file-circle-plus"></i>
                        <span>Add NewJob</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
    );
};

export default Sidebar;