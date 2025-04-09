import './App.css'
import Header from './components/Header'
import Logo from './components/Logo'

function App() {
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <Header>
          <Header.Logo>
            <Logo src="/logo.png" alt="logo" />
          </Header.Logo>
          <Header.Cover>
            <img src="/hero.png" alt="hero banner" />
          </Header.Cover>
          <Header.Heading>
            <h1>
              Find 
              <span className="text-gradient"> Movies </span>
              for fun
            </h1>
          </Header.Heading>
        </Header>
      </div>
    </main>
  )
}

export default App
