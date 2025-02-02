import React from 'react'
import '../../App.css'
import './Team.css'
import profile from '../../Assets/images/silulete.jpg';

const Team = () => {
  return (
    <div className='team'>
        <div className='team-container'>
          <h1>Náš Tým</h1>
          <div className='profiles'>
            <div className='profile-container'>
              <div className='profile-pic'>
                <img src={profile} alt='profile'/>
              </div>
              <div className='profile-info'>
                <div className='profile-name'>
                  <h2>Your name</h2>
                </div>
                <div className='profile-text'>
                  <p>here comes some basic information</p>
                </div>
              </div>
            </div>
            <div className='profile-container'>
              <div className='profile-pic'>
                <img src={profile} alt='profile'/>
              </div>
              <div className='profile-info'>
                <div className='profile-name'>
                  <h2>Your name</h2>
                </div>
                <div className='profile-text'>
                  <p>here comes some basic information</p>
                </div>
              </div>
            </div>        
            <div className='profile-container'>
              <div className='profile-pic'>
                <img src={profile} alt='profile'/>
              </div>
              <div className='profile-info'>
                <div className='profile-name'>
                  <h2>Your name</h2>
                </div>
                <div className='profile-text'>
                  <p>here comes some basic information</p>
                </div>
              </div>
            </div>
          </div> 
        </div>
    </div>
  )
}

export default Team
