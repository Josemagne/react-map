import './App.css';
import React, {useState, useEffect} from 'react';
import gemeindeJSON from './data/gemeinde.json';
import kantoneJSON from './data/kantone.json';


  let gemeindeArray = []; // horts the municipalities in arr
  let positionGemeindeArray = []; // gets the positon of the municipality
  for (const elem in gemeindeJSON) { // überweist Gemeinde-obj zu arr
    gemeindeArray.push(Object.values(gemeindeJSON[elem]))
  }
  for (const elem in gemeindeJSON) {
    positionGemeindeArray.push(elem);
  }

  console.log(positionGemeindeArray.includes('Naters'))



function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    if (gemeinde != null && kanton == null) {
      if (gemeinde in gemeindeJSON) {
        chooseGemeinde();
        setShowInfo(true);
      }

    }
    else if (kanton != null && gemeinde == null) {
      
    }
    
  }

  const chooseGemeinde = () => {
    let index;
    for (let i = 0; i < positionGemeindeArray.length; i++) {
      if (positionGemeindeArray[i] === gemeinde) {
        setIndex(i);
      }
    }
  }

  useEffect( () => {
    console.log('hello')
  })

  const [gemeinde, setGemeinde] = useState(null);
  const [kanton, setKanton] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [index, setIndex] = useState(null);

  return (
    <>
      <div className="container">
        <div className="content">
          {/*form for entering data */}
          <form onSubmit={ (e) => submitHandler(e)}>
            <label forhtml="gemeindeName">Name der Gemeinde: </label>
            <input type="text" id="gemeindeName" onChange={ (e) => setGemeinde(e.target.value)}></input>
            <br></br>
            <label forhtml="kanton">Kanton: </label>
            <input type="text" id="kanton" onChange={ (e) => setKanton(e.target.value)}></input>
            <br />
            <input type="submit" name="submit"></input>
          </form>

          {/* showing the requested data */}
          <div className="show">
            <div className="gemeindeContainer">
              <h3>Im Jahr 2019</h3>
              {
                showInfo &&
                <div className="gemeindeContent">
                  {
                    showInfo && <>
                    <span>Gemeinde: </span><span className="gemeindeContent__input">{gemeindeArray[index][0]}</span><br/>
                    <span>Kanton: </span><span className="gemeindeContent__input">{gemeindeArray[index][1]}</span><br/>
                    <span>BFS-Nr.: </span><span className="gemeindeContent__input">{gemeindeArray[index][2]}</span><br/>
                    <span>Einwohner: </span><span className="gemeindeContent__input">{gemeindeArray[index][3]}</span><br/>
                    <span>Fläche km²: </span><span className="gemeindeContent__input">{gemeindeArray[index][4]}</span><br/>
                    <span>Einwohner pro km²: </span><span className="gemeindeContent__input">{gemeindeArray[index][5]}</span>
                    </>
                  }
                </div>
              }
            </div>
            <div className="kantonContainer"></div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
