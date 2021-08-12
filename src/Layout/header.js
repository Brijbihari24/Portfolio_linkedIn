import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <div>
            <div className="flex-sp-btw">
                <div>
                    <img className="nav-txt" src="logo192.png" width="50px" />
                </div>
                <div className="flex-space-around">
                    <div className="nav-txt" ><Link to="/">Work</Link></div>
                    <div className="nav-txt" ><Link to="/about">About</Link></div>
                    <div className="nav-txt" ><Link to="/form">Contact</Link></div>
                    <div className="nav-txt" >Other</div>
                </div>
            </div>
        </div>
    )
}
