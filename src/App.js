import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import Images from "./components/images";
import "./styles/App.css";
import "./styles/images.css"




function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);

  return (
    <div className="App">
      <h1>CAT SPECIES</h1>
      <p>
        Descriptions and Images of different species of cats. Lost of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="Gallery">
        {cats &&
          cats.map((cat) => (
            <div key={cat.id} className="row">
              <div>
                <h2>{cat.name}</h2>
                <h3>Temperament: {cat.temperament}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
      </div>
      <Images></Images>
    </div>
  );
}

export default App;
