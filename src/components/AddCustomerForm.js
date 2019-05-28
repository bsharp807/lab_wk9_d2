import React, { Component } from 'react';

class AddCustomerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
      residence: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.id]:event.target.value});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newCust = {
      name: this.state.name,
      tag: this.state.tag,
      residence: this.state.residence,
      accounts: []
    }
    this.props.addCustomer(newCust);
    this.setState({
      name: '',
      tag: '',
      residence: ''
    })
  }

  render(){
    return(
      <div className='add-form'>
        <form onSubmit={this.handleFormSubmit} autoComplete= 'off'>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange}/>
          <label htmlFor="tag">GamerTag</label>
          <input type="text" name="tag" id="tag" value={this.state.tag} onChange={this.handleInputChange}/>
          <label htmlFor="residence">Residence</label>
          <input type="text" name="residence" id="residence" value={this.state.residence} onChange={this.handleInputChange}/>
          <input type="submit" value="Add Customer" />
        </form>
      </div>
    )
  }
}

export default AddCustomerForm;
