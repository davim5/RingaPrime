import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <MovieList/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
