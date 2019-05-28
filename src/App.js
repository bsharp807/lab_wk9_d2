import React, { Component } from "react";
import { connect } from 'react-redux';
import CustomerDataContainer from './containers/CustomerDataContainer';
import AddCustomerContainer from './containers/AddCustomerContainer';


class App extends Component {

  componentDidMount() {
    this.props.getData();
  }

  render(){
    return (
      <div className="App">
        <h1>BANK APP</h1>
        <CustomerDataContainer />
        <AddCustomerContainer />
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  getData() {
    dispatch(() => {
      fetch(`http://localhost:3000/customers/`)
      .then(res => res.json())
      .then(customerData => {
        dispatch({
          type: 'GET_CUSTOMER_DATA',
          customerData
        })
      })
    })
  }
})


export default connect(null, mapDispatchToProps)(App);
