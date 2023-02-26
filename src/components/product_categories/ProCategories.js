import React from 'react'
import "./categories.css"

function ProCategories({categories}) {
  return (
    <div>
        <ul style={{display:"flex"}}>
            {categories.map(item=>{
                return <li>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default ProCategories