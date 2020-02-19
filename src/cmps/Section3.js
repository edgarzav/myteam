import React from 'react'

export default function Section3() {
    return (
        <div className="section3 flex justify-center align-center column">
            <h2 className="text-center">Delivering real results for top companies. Some of our <span>success stories.</span></h2>
            <div className="cards flex">
                <div className="text-center flex column align-center">
                    <div className="icon-quot"></div>
                    <h3> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</h3>
                    <h4>Kady Baker</h4>
                    <span className="sec3-user-details">Product Manager at Bookmark</span>
                    <div className="sec3-user1-img"></div>
                </div>
                <div className="text-center flex column align-center">
                    <div className="icon-quot"></div>
                    <h3>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</h3>
                    <h4>Aiysha Reese</h4>
                    <span className="sec3-user-details">Founder of Manage</span>
                    <div className="sec3-user2-img"></div>
                </div>
                <div className="text-center flex column align-center">
                    <div className="icon-quot"></div>
                    <h3>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</h3>
                    <h4>Arthur Clarke</h4>
                    <span className="sec3-user-details">Co-founder of MyPhysio</span>
                    <div className="sec3-user3-img"></div>
                </div>
            </div>
        </div>
    )
}
