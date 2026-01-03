import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />
      <div className='layout'>
        {/* Place Board component below */}
        <aside className="sidebar">Insert Board component</aside>
        <main className="main"><CardList /></main>
        {/* Place Form components below */}
        <aside className="panel">Insert forms for board and card</aside>
      </div>
    </>
  )
}

export default App
