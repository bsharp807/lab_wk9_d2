import { connect } from 'react-redux';
import AddCustomerForm from '../components/AddCustomerForm';

const mapDispatchToProps = (dispatch) => ({
  addCustomer(customer) {
    dispatch(() => {
      fetch('http://localhost:3000/customers/', {
        method: 'POST',
        body: JSON.stringify(customer),
        headers: { 'Content-Type': 'application/json'}
      }
      )
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

export default connect(null, mapDispatchToProps)(AddCustomerForm)
