import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import Players from './components/players/Players';


function App() {

  // fetching players data
  const playersPromise = fetch('/public/players.json').then(res => res.json());

  // handle coin use state
  const [coin, setCoin] = useState(99000);

  return (
    <>
      <header>
        <NavBar coin={coin}></NavBar>
        <Banner></Banner>
        <Suspense fallback={<div className='flex justify-center items-center mx-auto my-12'><span className="loading loading-spinner loading-xl"></span></div>}>
          <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}></Players>
        </Suspense>
      </header>
    </>
  )
}

export default App
