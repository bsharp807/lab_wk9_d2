import React, { Component } from 'react';
import AddAccountForm from './AddAccountForm';

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addAccountForm: '',
      button: '+'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return(
      <div>
        <div onClick={this.handleClick}>{this.state.button}</div>
        <div>{this.state.addAccountForm}</div>
      </div>
    )
  }

  handleClick() {
    if(!this.state.addAccountForm){
      this.setState({
        addAccountForm: <AddAccountForm customer={this.props.customer} addAccount={this.props.addAccount} />,
        button: "-"
      })
    } else{
      this.setState({
        addAccountForm: '',
        button: "+"
      })
    }
  }
}

export default AddAccount;
