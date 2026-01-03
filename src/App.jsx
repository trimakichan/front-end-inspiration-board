import './App.css'
import  CardList from './components/CardList'

function App() {

  return (
    <>
    <h1>Welcome To Inspiration Board!</h1>
    <div className='container'>
    <div className="col-1">Boards</div>
    <div className="col-2"><CardList /></div>
    <div className="col-3">Forms</div>
    </div>
    </>
  )
}

export default App
