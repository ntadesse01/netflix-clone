
import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requests";


function Banner() {
const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(requests.fetchNetflixOriginals);
            const randomMovie =
              response?.data.results[
                Math.floor(Math.random() * response.data.results.length)
              ];
            setMovie(randomMovie);
            return response;
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
      }, []);
function truncate(strings, num) {
  return strings?.length>num? strings.substr(0, num -1) +"...": strings; 
}

    return (
        <header
          className="banner"
         style={{
  backgroundSize: "cover",
  backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
  backgroundPosition: "center center",
}}
      >
          <div className="banner__contents">
            <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner__buttons">
              <button className="banner__button">Play</button>
              <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">{truncate(movie?.overview, 100)}</h1>
          </div>
          <div className="banner__fadeBottom" />
        </header>
      );
}

export default Banner;







// import React, { useState, useEffect } from "react";
// import "./Banner.css";
// // imprt axios from "axios";
// import requests from "./requests";

// function Banner() {
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(requests.fetchNetflixOriginals);
//         const randomMovie =
//           response?.data.results[
//             Math.floor(Math.random() * response.data.results.length)
//           ];
//         setMovie(randomMovie);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     fetchData();
//   }, []);

//   function truncate(string, num) {
//     return string?.length > num ? string.substr(0, num - 1) + "..." : string;
//   }

//   return (
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
//       </div>
//       <div className="banner__fadeBottom" />
//     </header>
//   );
// }

// export default Banner;

// // import React, { useEffect, useState } from 'react';
// // import "./Banner.css";
// // import axios from './axios';
// // import requests from './requests';
  

// // function truncate(strings, num) {
// //   return strings?.length>num? strings.substr(0, num -1) +"...": strings; 
// // }

// // function Banner() {
// //     const [movie,setMovie] =useState ([])
// //     useEffect (() => {
// //         async function fetchData (){
// //             const request = await axios.get(requests.fetchNetflixOriginals);setMovie(
// //                 request?.data.results[
// //                     Math.floor(Math.random() * request.data.results.length)
// //                 ]
// //             );
    
// //         return request;
// //     }
// //     fetchData ();
// // }, []);
// // //  console.log(movie)
 
// //  return (
// //     <header>
// //         className="Banner"
// //         style={{  
// //             backgroundSize: "cover",
// //             backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
// //             backgroundPosition: "center center",
// //         }}
     
// //         <div className="banner__contents">
// //             <h1 className="banner__title">
// //                 {movie?.title || movie?.name || movie.original_name}
// //             </h1>
// //             <div className="banner__buttons"/>
// //                 <button className ="banner__button">Play</button>
// //                 <button className="banner__button">My List</button>
// //             </div>
// //             <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
// //                  <div className="banner__fadeBottom"></div>

// //     </header>
     
// //  )
// //     }

     

// // export default Banner;

// // // Optional Chaining (?)


