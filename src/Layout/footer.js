import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { TiSocialFacebook, TiSocialTwitter, TiSocialDribbble } from "react-icons/ti"


export default function Footer() {
    return (
        <div className="flex-sp-btw">

            <div className="flex-space-around">
                <div>
                    <img className="mr-15 ml-15" src="logo192.png" width="60px" />
                </div>
                <div>
                    <p>©2021Arnau Ros,LLC.All rights reserved.</p>
                </div>
            </div>


            <div className="flex-space-around">
                <div className="p-20"><TiSocialFacebook size={30} /></div>
                <div className="p-20"><TiSocialTwitter size={30} /></div>
                <div className="p-20"><TiSocialDribbble size={30} /></div>
            </div>
        </div>
    )
}
