import React from 'react'

export default function Footer() {
    return (
        <div className="footer flex space-even align-center">
            <div>
                <div className="logo"></div>
                <span>home</span>
                <span>about</span>
            </div>
            <ul>
                <li>987  Hillcrest Lane</li>
                <li>Irvine, CA</li>
                <li>California 92714</li>
                <li>Call Us : 949-833-7432</li>
            </ul>
            <div>
                <ul>
                    <li className="facebook"></li>
                    <li className="pinterest"></li>
                    <li className="twitter"></li>
                </ul>
                <small>Copyright 2020. All Rights Reserved</small>
            </div>
        </div>
    )
}



