import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CarsContext from './CarsContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      }
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  }

  render() {
    const { children } = this.props;
    const contextValue = {
      ...this.state, 
      moveCar: this.moveCar ,
    };

    return (
      <CarsContext.Provider value={ contextValue }>
        { children }
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;