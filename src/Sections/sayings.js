import React from 'react'
import { ImNext, ImPrevious } from "react-icons/im";


export default function Sayings() {
    return (
        <div>
            <p className="font-s-35 font-f-Inter font-w-400 m-l-30">What Client Says</p>
            <div className="hoz-line"></div>

            <div className="flex-space-around m-t-100">
                <div className="m-t-40"><ImPrevious size={50} /></div>
                <div className="w-500 font-s-26 font-f-Inter font-w-400"><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Sint deleniti officiis reprehenderit porro explicabo
                    tempora neque dignissimos earum dolore delectus, dicta quia fugiat</p>
                    <p>-Ronald Weasley</p>
                    <p>CEO</p></div>
                <div className="m-t-40"><ImNext size={50} /></div>

            </div>

        </div>
    )
}
