import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className='layout'>
        <aside className="sidebar">Boards</aside>
        <main className="main"><CardList /></main>
        <aside className="panel">Forms</aside>
      </div>
    </>
  )
}

export default App
