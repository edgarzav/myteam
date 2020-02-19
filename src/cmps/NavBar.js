import React from 'react'

export default function NavBar() {
    return (
        <nav className="flex align-center space-between">
            <div className="flex">
                <div className="logo"></div>
                <ul className="flex">
                    <li>home</li>
                    <li>about</li>
                </ul>
            </div>
            <button>contact us</button>
        </nav>
    )
}
