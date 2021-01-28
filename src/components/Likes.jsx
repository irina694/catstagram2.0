// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of Likes
	// write a span and a button element inside
	// export default the component!

// Exercise 3: Prop It Up
// Likes should take in number of likes as a prop and display it.

// Exercise 4: State It
// Create a button that toggles between two states: "Liked" and "Not liked (yet)"
	 // add a constructor with initial state
	 // add a button to the rendered JSX with an onClick attribute
	 // add a method to handle the click/ change the state
	 // hook up the button text to the state
// BONUS: Create a likes counter
	 // take in a prop for the number of likes
	 // increase or decrease the likes based on whether button click is like/ unlike
	 // hint: take the total likes as a prop, and convert it to state

import React, {useState} from 'react'
import heart from '../images/pink-heart.jpg'

function Likes( props ) {


  const { likes, userLiked } = props

  const [ isLiked, setIsLiked ] = useState( userLiked )
  const [ likesCount, setLikesCount ] = useState( likes )

  const handleIsLikedClick = () => {

    // The Like button hasn't been clicked before: increase the counter
    if ( ! isLiked ) {
      setLikesCount( likesCount + 1 );
    } else {
      // The like button has been clicked before: decrease the counter;
      setLikesCount( likesCount - 1 );
    }

    // Updates the state at the end of the function
    setIsLiked( ! isLiked );

  }

  return (

    <div className="Likes">
      <span>Likes: { likesCount }</span>
      { ! isLiked &&
        <button onClick={ handleIsLikedClick }>Not liked (yet)</button>
      }
      { isLiked &&
        <button conClick={ handleIsLikedClick }>
          <img className="liked" src={heart}/>
          Liked
        </button>
      }

    </div>

  )
}

export default Likes
