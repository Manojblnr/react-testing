
// simple test

// import React from 'react'

// const Greet = () => {
//   return (
//     <div>Hello</div>
//   )
// }

// export default Greet


//  Test Driven Development (TDD) 

import { GreetProps } from "./Greet.types"

const Greet = (props: GreetProps) => {
  return (
    <div>Hello {props.name ? props.name : "Guest" }</div>
  )
}

export default Greet