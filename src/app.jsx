import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CruchCounter from './crush-counter';
import { connect } from 'react-redux';
import { startLoad } from './redux/modules/load';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    startLoad: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div>
        <p>数字をクリックするとインクリメントされます。</p>
        <p>数字が5になるとCrushCounter componentがクラッシュします。</p>
        <CruchCounter/>
        <button onClick={() => this.props.startLoad()}>redux error occurs</button>
      </div>
    );
  }
}

export default connect(
  state => ({ loading: state.load.loading }),
  { startLoad },
)(App);
