import React from 'react';
import ReactDOM from 'react-dom';

import Pilot from './comps/Age.jsx';


const GatherComp = () => {
  const evaStl ={ textAlign: "center", backgroundColor: "gray", padding: "5px", maxWidth: "500px" }
  return(
    <div style={evaStl} >
      <h1>React State Practice</h1>
      <Pilot />
      <br/>
      <h4><a href="https://github.com/Edxael/React-Calc"target="_blank" >GitHub Code LINK</a></h4>
      <p>By: <a href="https://www.mycode.website/" target="_blank">Edmundo Rubio</a></p>
    </div>
  )
}

ReactDOM.render(<GatherComp />, document.getElementById("root"));
