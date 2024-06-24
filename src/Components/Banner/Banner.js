import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios' //calling custom created axios,not installed

function Banner() {
   const [movie, setMovie] = useState()

   useEffect(() => {
      // Function to run when the component mounts
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results);
      const movies = response.data.results;
      const randomIndex = Math.floor(Math.random() * movies.length);
      const randomMovie = movies[randomIndex];
      setMovie(randomMovie);
    })

  }, [])

  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title :""}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview :""}</h1>
            {/*It checks if the movie variable exists and is not null or undefined. If movie has a value it displays movie.overview. */}
            {/*f movie is null, undefined, or any other falsy value, an empty string "" is displayed instead of attempting to access properties of null or undefined. */}
        </div>
       <div className="fade_bottom">

       </div>

    </div>
  )
}

export default Banner

  // useEffect(() => {
  //   const fetchRandomMovie = async () => {
  //     // This is a function declared inside useEffect using the async keyword, which means it performs asynchronous operations (like fetching data).
  //       //Functions declared with async are special in JavaScript because they can perform tasks that take time, like fetching data from a server or reading files, without blocking other code from running.
  //       // Inside an async function, you can use await before an operation that returns a promise (a special JavaScript object that represents an eventual result of an asynchronous operation). await tells JavaScript to pause executing the function until the promise is resolved (fulfilled) and return the result.
  //       const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);
  //       const movies = response.data.results;
  //       const randomIndex = Math.floor(Math.random() * movies.length);
  //       //Math.random(): This is a built-in JavaScript function that generates a random floating-point number between 0 (inclusive) and 1 (exclusive). It looks something like this:
  //       // Example: 0.12345678901234
  //       // movies.length: This refers to the number of elements (or items) in the movies array. In simpler terms, it tells us how many movies are in the list.
  //       // Multiplication: When you multiply Math.random() by movies.length, you get a random number that could range from 0 up to (but not including) movies.length. For example, if movies.length is 10, multiplying Math.random() by 10 gives you a random number between 0 and 9.99999....
  //       // Math.floor(): This function rounds down to the nearest whole number. It ensures that even if you get a number like 9.99999..., it will become 9. This step is crucial because array indices (like movies[randomIndex]) must be whole numbers.
  //       // randomIndex: After Math.floor(Math.random() * movies.length) is evaluated, randomIndex will hold a randomly chosen integer (whole number) between 0 and movies.length - 1. This integer is used to access a random movie from the movies array.
  //       const randomMovie = movies[randomIndex];
  //       setMovie(randomMovie);// Updates the state variable movie with the randomly selected randomMovie. This will cause a re-render of the component with the new movie.
  //   };

  //   fetchRandomMovie();//Calls the fetchRandomMovie function immediately when the component mounts (due to the empty dependency array []), triggering the API request and state update.
  // }, []); // The empty array [] means this effect runs only once, when the component mounts.






//  useEffect(() => {
  //     // Function to run when the component mounts
  //   axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
  //     console.log(response.data.results[0]);

  //     setMovie(response.data.results[1])
  //   })

  // }, []) //The empty array [] means this effect runs only once, when the component mounts.

// useEffect is a hook that lets you perform side effects in function components (like data fetching,DOM manipulation, or subscribing to external services.).
// The useEffect here runs a function when the component mounts (the empty array [] means it runs only once).
// Inside useEffect, it makes a GET request to the endpoint trending/all/week, including the API key and language parameters.
// When the request is successful, it logs the first result (response.data.results[0]) to the console.



// The conditional rendering of {movie ? movie.overview : ""} inside the JSX element <h1 className='description'>...</h1> is typically used in conjunction with useEffect in React to ensure that the UI is updated appropriately when data fetching is involved. Let's explore why and how useEffect influences this pattern:
// Why Use useEffect with Conditional Rendering?
// Asynchronous Data Fetching:
// When fetching data asynchronously (e.g., from an API), it takes time for the data to arrive. During this time, the component might render before the data is available.
// useEffect allows you to initiate data fetching and perform other side effects when the component mounts or when specific dependencies change.
// Handling State Changes:
// Once the data is fetched and available, it typically updates the component's state (via useState hook) or is passed down as props.
// React components re-render automatically when their state or props change.
// Conditional Rendering:
// To avoid errors due to accessing properties of null or undefined, conditional rendering ({movie ? movie.overview : ""}) ensures that the component displays appropriate content when the movie data is not yet available.
// Initially, movie might be null or an empty object until the data fetch completes.
// How useEffect Facilitates This Pattern
// Initialization on Mount:
// useEffect with an empty dependency array ([]) runs only once when the component mounts. This is perfect for initiating data fetching operations.
// Once the data fetch is complete and the state is updated with the fetched data (setMovie(...)), React triggers a re-render.