import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="text-center">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer>
        <p>This project was coded by Kristina Kocur and it is open-sourced on <a href="https://github.com/kika1809/dictionary-project" target="_blank" 
            rel="noopener noreferrer">GitHub</a>, hosted on <a href="https://naughty-lamport-9a69c7.netlify.app/" target="_blank" 
            rel="noopener noreferrer">Netlify</a>.</p>
      </footer>
      </div>
    </div>
  );
}

