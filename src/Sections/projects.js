import React from 'react'
import { BsPlusCircle } from "react-icons/bs";

export default function Projects() {
    return (
        <div>
            <p className="font-s-35 font-f-Inter font-w-400 m-l-30">Projects</p>
            <div className="hoz-line"></div>

            <div className="flex-space-around">
                <div>
                    <h4 className="font-s-30 font-f-Inter font-w-400">01Example</h4>
                    <div>
                        <a href="#">
                            <img className="proj-img" src="https://wallpaperaccess.com/full/1288076.jpg" width="290px" height="440px" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-s-30 font-f-Inter font-w-400">02Example</h4>
                    <div>
                        <a href="#">
                            <img className="proj-img" src="https://wallpaperaccess.com/full/1288076.jpg" width="290px" height="440px" />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-s-30 font-f-Inter font-w-400">03Example</h4>
                    <div>
                        <a href="#">
                            <img className="proj-img" src="https://wallpaperaccess.com/full/1288076.jpg" width="290px" height="440px" />
                        </a>
                    </div>
                </div>
                <div><BsPlusCircle size={30}/></div>
            </div>
        </div>
    )
}
