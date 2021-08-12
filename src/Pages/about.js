import React from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function About() {
    return (
        <div>
            <p className="font-s-35 font-f-Inter font-w-400 m-l-30">About Me</p>
            <div className="hoz-line"></div>

            <div className="flex-space-around m-t-80">
                <div>
                    <p className="font-s-27 font-f-Inter font-w-400 w-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint deleniti officiis reprehenderit porro explicabo
                        tempora neque dignissimos earum dolore delectus, dicta quia fugiat at accusamus magni consequuntur obcaecati,
                        eius.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint deleniti officiis reprehenderit porro explicabo
                        tempora neque dignissimos earum dolore delectus, dicta quia accusamus.
                    </p>
                </div>
                <div className="h-150">
                    <p className="font-s-27 font-f-Inter font-w-400 w-500">Your one stop store for :</p>


                    <div className="flex-space-around">
                        <div>
                            <p className="font-s-27 font-f-Inter font-w-400 w-500">1 Branding/Logo</p>
                        </div>
                        <div><BsChevronDown /></div>
                    </div>

                    <div className="hoz-line"></div>
                    <p className="font-w-400 font-f-Inter font-18 w-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint deleniti officiis reprehenderit porro explicabo
                        tempora neque dignissimos earum dolore delectus, dicta quia fugiat at accusamus magni consequuntur obcaecati.</p>
                    <div className="flex-space-around">
                        <div>
                            <p className="font-s-27 font-f-Inter font-w-400 w-500">2 Packaging</p>
                        </div>
                        <div><BsChevronUp /></div>
                    </div>
                    <div className="flex-space-around">
                        <div>
                            <p className="font-s-27 font-f-Inter font-w-400 w-500">3 Websites</p>
                        </div>
                        <div><BsChevronUp /></div>
                    </div>
                    <div className="hoz-line"></div>


                </div>
            </div>

            <div className="font-w-400 font-f-Inter f-22 w-500 align-inline display-flex m-t-120">
                <ul><li>Illustrator</li></ul>
                <ul><li>Webflow</li></ul>
                <ul><li>Figma</li></ul>
                <ul><li>Indesign</li></ul>
                <ul><li>PremierPro</li></ul>
                <ul><li>Cinema4D</li></ul>
                <ul><li>Sketch</li></ul>
                <ul><li>photoshop</li></ul>
            </div>


        </div>
    )
}
