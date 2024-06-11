import React, {useEffect} from 'react'
import Sidebar from '../partials/Sidebar';
import Torbar from '../partials/Topbar.jsx';
import Footer from '../partials/Footer';
import Dashboard from '../../views/Dashboard';
import {useStateContext} from "../../contexts/ContextProvider.jsx";
import {Navigate, Outlet} from "react-router-dom";
import axiosClient from "../../axios-client.js";

function DefaultLayout() {

    const {user,token,setUser,setToken} = useStateContext();

    if (!token){
       return <Navigate to={'/login'}/>
    }

    useEffect(() => {
        axiosClient.get('user')
            .then((data) => {
                setUser(data.data);
            });
    }, []);

    return (
        <div>
            <div>
                <div id="wrapper">
                    {/* Sidebar */}
                    <Sidebar/>
                    {/* Sidebar */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            {/* TopBar */}
                            <Torbar/>
                            {/* Topbar */}
                            {/* Container Fluid*/}
                            <div className="container-fluid" id="container-wrapper">
                               <Outlet/>
                            </div>
                            {/*-Container Fluid*/}
                        </div>
                        {/* Footer */}
                        <Footer/>
                        {/* Footer */}
                    </div>
                </div>
                {/* Scroll to top */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
            </div>

        </div>
    )
}

export default DefaultLayout
