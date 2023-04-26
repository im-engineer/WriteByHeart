import React from 'react'
import "./Profile.css"
import img from "../../assets/jpeg/book-1.jpeg"
function Profile() {
  return (
    <div className='profile--page'>
        <div className='container'>
            <div className='header'>
                <h5>My Profile</h5>
            </div>
            
        </div>
        <div className='user'>
        <div className='row'>
                <div className='col-md-5' style={{border:"black"}}>
                    <div className='user--image'>
                        <img src={img} alt=""></img>
                    </div>
                </div>
                <div className='col-md-2' style={{border:"red"}}></div>
                <div className='col-md-5' style={{border:"green"}}>
                    <div className='user--info'>
                        Siddhant Singh <br/> sid@01 <br/> giggolhgp <br/>holhphp <br/>vkgbougho8 <br/>
                        <button>Edit profile</button> <button>Share Profile</button>
                    </div>
                </div>
            </div>
            <hr/>

        </div>
    </div>
  )
}

export default Profile