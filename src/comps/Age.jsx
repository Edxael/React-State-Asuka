import React from 'react';
import asuka from './img/asuka.jpg';

class Pilot extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      country: "What country is she from?"
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }


  onButtonClick() {
    this.setState({
      country: "GERMANY"
    });

    setTimeout(() => {
      this.setState({
        country: "What country is she from?"
      });
    }, 1500);
  }


  render() {

    const evaStyle = { border: "2px solid black", width: "250px", padding: "10px", textAlign: "center", backgroundColor: "rgb(102, 255, 250)", margin:"0px auto", display: "block" }
    const evaPic = { border: "4px solid white" }

    return(
      <div style={evaStyle}>
        <h3>Pilot of EVA Unit 2</h3>
        <img style={evaPic} src={asuka} alt="Missing Pic"/>
        <h3>Asuka Langley Soryu</h3>
        <p>{this.state.country}</p>
        <button onClick={this.onButtonClick}>Show Country</button>
      </div>
    )
  }
}

export default Pilot;
