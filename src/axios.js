import axios from "axios"; //This imports the axios library, which is used for making HTTP requests in a simple and consistent way.
import {baseUrl} from './Constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance