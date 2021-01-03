import "./App.css";
import CharactersList from "./components/characters_list/CharactersList.component";
import Header from "./components/header/Header.component";

function App() {
  return (
    <div className="container">
      <Header />
      <CharactersList />
    </div>
  );
}

export default App;
