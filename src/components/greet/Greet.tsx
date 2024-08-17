
// simple test

// import React from 'react'

// const Greet = () => {
//   return (
//     <div>Hello</div>
//   )
// }

// export default Greet


//  Test Driven Development (TDD) 

import React from 'react'

type GreetProps = {
    name?: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>hello {props.name}</div>
  )
}

export default Greet