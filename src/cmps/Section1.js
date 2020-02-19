import React from 'react'
import NavBar from './NavBar'

export default function section1() {
    return (
        <div className="section1">
            <NavBar />
            <div className="header flex justify-center align-center">
                <h2>Find the best <span>talent</span></h2>
                <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
        </div>
    )
}
