import NavBar from 'components/NavBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout: React.FC = () => {
    return (
        <div className="App">
            <NavBar />
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Layout;
