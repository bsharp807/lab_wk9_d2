import React from 'react';
import AddAccount from './AddAccount';
import './customer_card.css'

const CustomerCard = (props) => {
  const mapAccounts = props.customer.accounts.map((element, i) => {
    return(
      <div key={i} className='account'>{element.accountType}: {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'GBP'}).format(element.amount)}</div>
    )
  })

  return(
    <div className= "customer-card">
      <div>{props.customer.name} {props.customer.tag}</div>
      <div>{props.customer.residence}</div>
      <div>
        {mapAccounts}
      </div>
      <div>
        <AddAccount
          addAccount={props.addAccount}
          customer={props.customer}
         />
      </div>

    </div>
  )
}

export default CustomerCard;
