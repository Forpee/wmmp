import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
