import React from 'react'

function Home() {
  return (
    <div className="homepagecontainer">
        
        <div className="homecontentcontainer">
            <div className="homeheader">
                    <p className="accsettingstxt">Account Settings</p>
            </div>
            <div className="profileimgcontainer">
                <div className="flexitem1"><div className="profileimg"></div></div>
                <div className="flexitem2"><p className="usernameandmail1">Jane Dao</p>
                <p className="usernameandmail2">Jane@Gmail.com</p></div>
            </div>
            <div className="profilecontent">
                <div className="contentinfo">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur odio dignissimos deserunt est iure .
                </div>
            </div>
        <div className="borderline"></div>
        </div></div>
  )
}

export default Home