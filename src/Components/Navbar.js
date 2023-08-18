import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {


    return (
        <>
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><h1>GIGITAC</h1></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" to="/">Action</a></li>
                                        <li><a className="dropdown-item" to="/  ">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" to="/">Something else here</a></li>
                                        
                                    </ul>

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>
                              
                            </ul>
                        </div>
                        
                    </div>
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" onClick={props.toggleMode} role="switch" type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
                </nav>
            </div>

        </>
    )
}
