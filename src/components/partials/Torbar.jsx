import React from 'react'
import BoyImage from "../../assets/img/boy.png";
import {useStateContext} from "../../contexts/ContextProvider.jsx";
import axiosClient from "../../axios-client.js";

function Torbar() {

    const {setUser,setToken} = useStateContext();
    //logout
    const handleLogout = (e)=>{
        e.preventDefault();

        axiosClient.post('/logout')
            .then(res => {
                setUser({});
                setToken(null);
            });
    }
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
                <button id="sidebarToggleTop" className="btn btn-link rounded-circle mr-3">
                    <i className="fa fa-bars" />
                </button>
                <ul className="navbar-nav ml-auto">
                    <div className="topbar-divider d-none d-sm-block" />
                    <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="img-profile rounded-circle" src={BoyImage} style={{ maxWidth: 60 }} />
                            <span className="ml-2 d-none d-lg-inline text-white small">Maman Ketoprak</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                Profile
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                Settings
                            </a>
                            <a className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                Activity Log
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" onClick={handleLogout} >
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Torbar
