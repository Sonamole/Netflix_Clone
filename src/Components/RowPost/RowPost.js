import React,{useEffect,useState} from 'react'
import './RowPost.css'
import {imageUrl} from '../../Constants/constants'
import YouTube from 'react-youtube'
import axios from '../../axios'
import { API_KEY } from '../../Constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const[urlId,seturlId]=useState('')
  useEffect(()=>{
      axios.get(props.url).then(response=>{
        console.log(response.data);
        setMovies(response.data.results)
      })
  },[])



  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTrailer=(id)=>{
    console.log(id);
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
    // console.log(response.data.results);
      if(response.data.results.length!==0){
         seturlId(response.data.results[0])
      }
      else{
        console.log('Array Empty No trailer available');
      }

    })

    }


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>(
            <div>
            <img onClick={()=>handleMovieTrailer(obj.id)}  className={props.isSmall ? 'smallPoster':'poster small'} src={`${imageUrl+obj.backdrop_path}`} alt="Poster" />
            <p className='movieName'>{obj.name}</p>
            <p className='movieName'>{obj.title}</p>
            </div>

))}

        </div>

          { urlId &&  <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}

export default RowPost