import React, { Component } from 'react'

class AddAccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountType: '',
      amount: 0
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.id]:event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newAccount = {
      id: this.props.customer._id,
      accountType: this.state.accountType,
      amount: parseInt(this.state.amount)
    }
    this.props.addAccount(newAccount);
    this.setState({
      accountType: '',
      amount: 0
    })
  }

  render() {
    return(
      <div className='add-account-form'>
        <form onSubmit={this.handleFormSubmit} autoComplete= 'off'>
          <label htmlFor="accountType">Account Type</label>
          <input type="text" name="accountType" id="accountType" value={this.state.accountType} onChange={this.handleInputChange}/>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" id="amount" value={this.state.amount} onChange={this.handleInputChange}/>
          <input type="submit" value="Add Account" />
        </form>
      </div>
    )
  }
}

export default AddAccountForm;
