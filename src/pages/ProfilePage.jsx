import React from 'react'
import ProfileImageForm from '../components/ProfileImageForm'
import ProfileBio from '../components/ProfileBio.jsx'

function ProfilePage() {

    return(
      <div className="ProfilePage">
        <ProfileImageForm />
        <ProfileBio />
      </div>
    )
}

export default ProfilePage
