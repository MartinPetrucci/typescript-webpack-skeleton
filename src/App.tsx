import './styles.css'
import IMAGE from './fondo.jpeg'
import { Counter } from './components/Counter/Counter'
import './styles/global.scss'

export const App = () => {
  return (
    <div>
      <h1>
        Edited!! React Typescript App - {process.env.NODE_ENV} {process.env.name}{' '}
      </h1>
      <span>API KEY: {process.env.api_key}</span>
      <br />
      <img src={IMAGE} alt="bariloche" width="500px" height="300px" />
      <Counter />
    </div>
  )
}
