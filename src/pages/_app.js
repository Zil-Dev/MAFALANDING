import '../styles/global.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

const AppComponent = ({ Component, pageProps, currentUser }) => {
    
    return (
        <Provider store={store} >
            <div className='w-screen h-dvh overflow-hidden'>
                <Component {...pageProps}/> 
            </div>
        </Provider>
    )
}

AppComponent.getInitialProps = async appContext => {
    
    return {
    }
}

export default AppComponent


