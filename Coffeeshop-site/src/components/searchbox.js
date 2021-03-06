/** @jsx jsx */
import { jsx } from "theme-ui"

const Searchbox = ({ searchChange }) => {
  return (
    <div>
      <input
        sx={{
          fontSize: 10,
          m: 0,
          height: "30px",
          width: ["100", "170px", "200px"],
        }}
        type="text"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  )
}

export default Searchbox
