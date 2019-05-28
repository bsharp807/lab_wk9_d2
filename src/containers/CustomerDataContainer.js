import { connect } from 'react-redux';
import CustomerList from '../components/CustomerList';

const mapStateToProps =  (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAccount(customer) {
    dispatch(() => {
      fetch(`http://localhost:3000/customers/accounts/${customer.id}`, {
        method: 'PUT',
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

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
