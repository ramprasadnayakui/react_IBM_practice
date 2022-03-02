import React, {useState} from "react"
import Highlighter from "react-highlight-words";


export default function search(){
  const [data, setData] = useState("Hello how are you all and i am good as always")
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setSearchData(searchData => searchData.push(e.target.value))
    console.log(searchData);
  }
  return(
    <div>
      <p>
        <input type="text" onChange={handleChange} />
      </p>
      <p>
        <Highlighter
          highlightClassName="YourHighlightClass"
          searchWords={searchData}
          autoEscape={}
          textToHighlight={data}
        />
      </p>
    </div>
  )
}