import React from "react"
import { Routes, Route, Link } from "react-router-dom"

function About () {
    return(
        <div>
            <main className="main">
                <h2>Hello</h2>
                <p> My name is Remco van de Siepkamp</p>
                <p>
                    This is a project for making a favorite music list.
                </p>
                <p>
                    Currently I am following the Winc Academy - Front End Developer Flex - course and am almost finished.<br></br>
                    I have found this course to be somewhat difficult at times when you don't follow class and doing it by yourself.<br></br>
                    Also I am not someone that askes for help very easy, and so this course takes a lot longer then I first anticipated.
                </p>
                <p>
                    I hope to finish this course soon so I can start my career as a Front End Developer. 
                </p>
            </main>
        </div>
    )
}

export default About