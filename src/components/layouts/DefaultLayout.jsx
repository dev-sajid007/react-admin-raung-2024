import React from 'react'
import Sidebar from '../partials/Sidebar';
import Torbar from '../partials/Torbar';
import Footer from '../partials/Footer';
import Dashboard from '../../views/Dashboard';

function DefaultLayout() {
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
                               <Dashboard/>
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