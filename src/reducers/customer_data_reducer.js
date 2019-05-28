const customerDataReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_CUSTOMER_DATA':
      return action.customerData
    default:
      return state
  }
}

export default customerDataReducer;
