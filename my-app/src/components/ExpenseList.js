import React from 'react'

function ExpenseList({detail}) {
  return (
    <div>
      <p>Amount: {detail.amount}, Message: {detail.msg}, Type: {detail.type}</p>
    </div>
  )
}

export default ExpenseList
