import React from 'react'
import { IoEnterSharp } from "react-icons/io5"

export default function RecentBlogs() {
    return (
        <div>
            <p className="text-center font-s-35 font-f-Inter font-w-400">Recent Blogs</p>

            <div className="flex-space-ev w-900 block-center">
                <div className="w-240"><p>Competition: win a N02 recycle counter chair by Nendo for Firtz Hansen</p>
                    <p>24.09.21</p>
                    <a href="#"><p>See Now</p></a></div>

                <div className="ver-line"></div>
                <div className="w-240"><p>Competition: win a N02 recycle counter chair by Nendo for Firtz Hansen</p>
                    <p>24.09.21</p>
                    <a href="#"><p>See Now</p></a></div>

                <div className="ver-line"></div>
                <div className="w-240"><p>Competition: win a N02 recycle counter chair by Nendo for Firtz Hansen</p>
                    <p>24.09.21</p>
                    <a href="#"><p>See Now</p></a></div>
            </div>



            <div className="ver-line"></div>
            <div className="jacked-line"></div>
            <div>
                <p className="text-center font-s-35 font-f-Inter font-w-400">Join the Newsletter!</p>
                <p className="text-center font-w-400 font-f-Inter font-s-20">You'll receive an email every once in a while about new<br /> product, courses and videos! </p>
                <div className="flex-center w-900 block-center">
                    <div>
                        <input className="submit-input" type="email" placeholder="name@example.com" width="180px"></input>
                    </div>
                    <div><button className="btn-icon"><IoEnterSharp size={20} /></button></div>
                </div>
            </div>
            <div className="hoz-line-2"></div>

        </div>
    )
}
