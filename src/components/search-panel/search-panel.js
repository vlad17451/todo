import React from 'react'
const SearchPanel = () => {
  const searchText = 'Type here to search'
  return <input className="form-control" type="text" placeholder={searchText}/>
}
export { SearchPanel }