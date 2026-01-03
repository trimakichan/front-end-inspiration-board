import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        <div className="col-1">Boards</div>
        <div className="col-2"><CardList /></div>
        <div className="col-3">Forms</div>
      </div>
    </>
  )
}

export default App
