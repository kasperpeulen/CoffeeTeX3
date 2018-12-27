import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="App"
          style={{
            width: '100vw',
            height: '100vh',
            padding: '20px'
          }}
        >
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
        </div>
      </div>
    );
  }
}

export default App;
