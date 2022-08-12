import './styles/global.scss'
import { Footer } from './layout/Footer/Footer'
import { Header } from './layout/Header/Header'
import { Main } from './layout/Main/Main'

export const App = () => {
  return (
    <div className='layout'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
