import { NavBar } from '../components'
export default function App({ Component, pageProps}) {
    return(
        <>
            <NavBar/>
            <Component {...pageProps} />
        </>
    )
}