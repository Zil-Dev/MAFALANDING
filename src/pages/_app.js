import '../styles/global.css'

const AppComponent = ({ Component, pageProps, currentUser }) => {
    
    return (
        <div className='w-screen h-dvh overflow-hidden'>
            <Component {...pageProps}/> 
        </div>
    )
}

AppComponent.getInitialProps = async appContext => {
    
    return {
    }
}

export default AppComponent


