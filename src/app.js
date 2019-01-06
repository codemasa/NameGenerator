var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  render() {

    return (
    <div>
      <h1>
        Random Band Name Generator!
      </h1>
      <div>

      </div>
      <div>
        <button onClick="generateName()"> Generate! </button>
      </div>

    </div>
  )
  }
}

export default App;
