import React from 'react'

function ExpenseList({detail,time}) {
  return (
    <div>
      <p>Amount: {detail.amount}, Message: {detail.msg}, time={time} type:{detail.category}</p>
    </div>
  )
}

export default ExpenseList
