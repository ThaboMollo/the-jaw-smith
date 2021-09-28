import React from "react";
import Navigation from "../Navigation/Navigation";


const Layout = (props) => {
    return (
        <div style={{"marginTop": "80px"}}>
            <Navigation/>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;