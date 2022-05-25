import React from "react";
import './Layout.css'


const Layout = ({ children }) => {
    return (
        <div className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
            {children}
        </div>
    )
};

export default Layout;