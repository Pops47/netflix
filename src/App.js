import "./App.css";
import Section from "./components/Section";
import logo from "./images/logo-netflix.png";
import films from "./json/movies_rnexgr.json";

console.log(films);

function App() {
  return (
    <div className="App">
      <header>
        <img className="logo" src={logo} alt="logo netflix" />
      </header>
      <main>
        {films.map((item, index) => {
          return (
            <Section
              key={index}
              category={item.category}
              images={item.images}
            />
          );
        })}
      </main>
    </div>
  );
}

export default App;
