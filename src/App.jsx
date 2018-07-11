import React, { Component } from 'react';
import CruchCounter from './crush-counter';

class App extends Component {
  render() {
    return (
      <div>
        <p>数字をクリックするとインクリメントされます。</p>
        <p>数字が5になるとCrushCounter componentがクラッシュします。</p>
        <CruchCounter/>
      </div>
    );
  }
}

export default App;
