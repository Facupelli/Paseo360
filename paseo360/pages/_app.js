import '../styles/globals.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001/";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
