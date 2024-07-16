import React from 'react'
import './MyStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    //  using backticks here...
    
     <div> <h1 className= {`${className} font-xl`}>Stylesheets</h1>

    </div>
  )
}

export default Stylesheet
