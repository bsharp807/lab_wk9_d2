import React from 'react';
import CustomerCard from './CustomerCard';

const CustomerList = (props) => {

  const mapCustomers = props.data.map((element, index) => {
    return(
      <CustomerCard
        key={index}
        customer={element}
        addAccount={props.addAccount}
      />
    )
  })

  return(
    <div>
      {mapCustomers}
    </div>
  )
}

export default CustomerList;
