import React from 'react'
const AppHeader = ( {toDo, done} ) => {
  console.log('f ')
  return (
    <div className='d-flex justify-content-between align-items-end'>
      <h1>My Todo list</h1>
      <div>Todo: {toDo} Done: {done}</div>
    </div>
  )
}
export { AppHeader }