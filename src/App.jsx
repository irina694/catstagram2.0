// Exercise 2: Set It Up
	// write a class component
	// make it a div with a class name of App
	// import Header and Homepage
	// include them inside of App
	// export the App component!


// Exercise 6: Provide Context
    // create PhotosContext outside of the component
    // Wrap the entirety of the contents of the App component with the PhotosContext provider
    // To the PhotosContext provider, pass in a prop of value that is equal to an object with key photos and value of the photos data

// Exercise 6: Provide Context BONUS
    // Create an addPhoto function here to pass into the context provider to be used in ImageUploaderForm, that accepts the new photo url as a param
    // You can follow along with this tutorial: https://mindsers.blog/en/updating-react-context-from-consumer/ for how to do that
    // You will need to create an entire newPhoto object with the url that gets added to the photos array
    // BUT!  There is an issue that the above tutorial does not address, which is that when you update state, you
    // CANNOT mutate the photos state array directly by using something like photos.push
    // You can read more here to give you some ideas about how to do it: https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#usinganobjectasastatevariablewithusestatehook
    // Hint: Use Concat
    // EXTRA EXTRA BONUS: Can you figure out how to add it to the beginning of the array instead of the end?

// Exercise 7: API It
    // change the PhotosContext from accepting the data.photos to an empty array, which will be the default data
    // use the useEffect hook from React to fetch the data
    // the url to fetch data from is: https://api.jsonbin.io/b/5f95dcdbbd69750f00c37370
    // on successful fetch, then convert the response from a response object to a json object
    // once the data is successfully fetched and converted,set the photos to the state
    // don't forget to pass in an empty array as a second argument to useEffect so that it only runs once per component mount

// Exercise 8: Routing
// Allow your user to route to different pages!
	// need to import BrowserRouter and Router from react-router-dom
	// Create basic class components on AboutPage and Profile Page, export them
	// import them in this file
	// set up BrowserRouter
	// set up Route to with paths to each page (hint: HomePage should "/") and with the appropriate component


import React, { createContext, useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'

export const PhotosContext = createContext()

function App() {

const [ photos, setPhotosData ] = useState( [] )

  useEffect(()  => {
    fetch('https://api.jsonbin.io/b/600f8e05bca934583e41c665')
      .then( response => response.json())
      .then( response => response.photos )
      .then( response => setPhotosData( response ))
      .catch( error => console.log(error))
      .finally()
  },[])

  const addPhoto = url => {
    console.log(`Adding new photo with url: ${url}`)
    // Create new photo
    if ( url.indexOf('http') > -1 || url.indexOf('www') > -1 ) {
      const photo = {
        id: photos.length + 1,
        likes: 0,
        title: url,
        url: url,
        userLiked: false
      }

      console.log(`New photo object:`);
      console.log(photo);

      const photoArray = [photo]
      const newArray = [...photoArray, ...photos]

      setPhotosData(newArray)


    } else {
      console.log(`Invalid photo URL. Please make sure the URL starts with 'http', 'https' or 'www'.`);
    }

  }

  return (
      <div className="App">
        <PhotosContext.Provider value={{ photos: photos, addPhoto: addPhoto }}>
            <Header />
            <HomePage photos={ photos }/>
        </PhotosContext.Provider>
      </div>
  );
}

export default App;
