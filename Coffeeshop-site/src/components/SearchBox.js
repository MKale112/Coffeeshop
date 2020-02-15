/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { Component } from "react"

const SearchBox = ({ searchChange }) => {
  return (
    <div>
      <input
        sx={{ fontSize: 10 }}
        type="text"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox
