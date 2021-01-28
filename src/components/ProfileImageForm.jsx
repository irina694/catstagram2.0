import React from 'react'
import logo from '../images/cat-profile.jpg'

function ProfileImageForm() {
  return(
    <form class="ProfileImageForm">
      <button>
        <img src={logo}></img>
      </button>
    </form>
  )
}

export default ProfileImageForm
