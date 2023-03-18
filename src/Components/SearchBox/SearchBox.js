import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../Pages/Api'
import "./SearchBox.css"

export default function SearchBox() {

    const [keyword, setKeyword] = useState("")
    const [searchResult , setSearchResult]= useState([])

    const searchHandler = () => {
        fetch(`${api}courses.json`)
           .then(res => res.json())
           .then(courses => {
               let filter = (Object.entries(courses).filter(course => (course[1].title.toLowerCase()).includes(keyword.toLowerCase())))
               setSearchResult(filter)
           })
    }

    console.log(searchResult);

    return (
        <div className='col-md-8'>
            <div class="input-group">
                <input class="form-control form-control-lg " value={keyword}
                    onChange={event => setKeyword(event.target.value)}
                    onKeyUp={event => event.keyCode == 13 && searchHandler() }
                />
                <div class="input-group-append">
                    <span onClick={searchHandler}
                    class="input-group-text bg-transparent text-primary">
                        <i class="fa fa-search ml-2"></i>
                    </span>
                </div>
            </div>
            {searchResult.length > 0 && keyword.length > 0 &&
            <div className='border search-box-result col-md-11'>
                {
                    searchResult.map(course => (
                        <Link to={`/course/${course[1].shortname}`}>
                        <h6 className='p-2 border-bottom text-align-left-search-box'>{course[1].title}</h6>
                        </Link>
                    ))
                }
            </div>}
        </div>
    )
}
