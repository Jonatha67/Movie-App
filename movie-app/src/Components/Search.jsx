import React from "react"

export const Search = (props) => {
    return (
        <div className="col col-sm-4 mt-2 mb-2">
            <input className="form-control" 
            value={props.searchValue} 
            onChange= {(event) => props.setSearchValue(event.target.value) }
            placeholder="search.."/>
        </div>
    )
}

