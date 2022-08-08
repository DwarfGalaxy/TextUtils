import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
   
    return (
        
        <nav className={`navbar navbar-expand-lg navbar-${props.background_Color} bg-${props.background_Color}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/textutils">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/textutils">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onClick={props.changeBackgroundColor}/>
                            <label className={`form-check-label text-${props.text_Color}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}


//   Initializing default value for props.
Navbar.defaultProps = {
    title: 'Rahul',
    about: 'deepblue'
};
