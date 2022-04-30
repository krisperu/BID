import React, { useState } from 'react'
import Detail from './Detail'
import AddDetailForm from './AddDetailForm'

function Dream({ dream, details, setDetails }) {
    const [showDetail, setShowDetail] = useState(false)
    const [checked, setChecked] = useState(false)
    const [showAddDetail, setShowAddDetail] = useState(false)
    
  function handleShowDetail(e, showDetail) {
    e.stopPropagation()
    setShowDetail(!showDetail)
  }

  function handleShowAddDetail(e, showAddDetail) {
    e.stopPropagation()
    setShowAddDetail(!showAddDetail)
  }

  function handleCheck(){
    setChecked((checked) !==checked)
  }

  // console.log(checked)

  const detailObj = dream.details?.map((detail) => 
    <Detail key={detail.id} detail={detail}/>
  )

  return (
    <div>
      <button className="ui mini right floated circular basic icon button" onClick={(e) => handleShowDetail(e, showDetail)}><i aria-hidden="true" className="angle down icon"></i></button>
      <div className="dreamTitle">
        <label onChange={(e) => handleCheck(e)} className="container">{dream.dream}
        <input type="checkbox"  />
        <span className="checkmark"></span>
      </label>
      </div>
      
      {showDetail &&
        <div>{detailObj}
        <button className="ui mini  floated circular basic icon button" onClick={(e) => handleShowAddDetail(e, showAddDetail)}><i aria-hidden="true" className="add icon"></i></button>
          {showAddDetail &&<div>
            <AddDetailForm 
              dream={dream} 
              details={details} 
              setDetails={setDetails}
            />
          </div>}
          <br></br>
      </div>}
      
    </div>
    
  )
}

export default Dream


//| Done: {dream.status ? "yes" : "no"}

// <form class="ui form">
//   <div class="field">
//     <label>First Name</label>
//     <input placeholder="First Name"/>
//   </div>
//   <div class="field">
//     <label>Last Name</label>
//     <input placeholder="Last Name"/>
//   </div>
//   <div class="field">
//     <div class="ui checkbox">
//       <input type="checkbox" class="hidden" readonly="" tabindex="0"/>
//       <label>I agree to the Terms and Conditions</label>
//     </div>
//   </div>
// <button class="ui button" type="submit">Submit</button>
// </form>