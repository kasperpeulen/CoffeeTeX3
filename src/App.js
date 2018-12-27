import React, { Component } from 'react';
import './App.css';
import LongPress from "./component/LongPress";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          width: '100vw',
          height: '100vh',
          padding: '20px'
        }}
      >
        <LongPress
          onLongPress={(e) => console.log(e.key)}>
          <textarea
            style={{
              height: '100%',
              width: '100%',
              resize: 'none',
              border: 'none',
              outline: 'none'
            }}
            placeholder={'Start typing...'}
          />
        </LongPress>
      </div>
    );
  }
}

export default App;
