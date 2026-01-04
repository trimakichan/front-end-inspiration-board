import './App.css';
import CardList from './components/CardList';
import Header from './components/Header';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';

function App() {

  return (
    <>
      <Header />
      <div className='layout'>
        {/* Place Board component below */}
        <aside className="sidebar">Insert Board component</aside>
        <main className="main"><CardList /></main>
        {/* Place Form components below */}
        <aside className="panel">
      <NewBoardForm />
      <NewCardForm />
      
      </aside>
      </div>

    </>
  )
}

export default App
