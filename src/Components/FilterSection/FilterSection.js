import React, { useState } from 'react'
import "./FilterSection.css"

export default function FilterSection({display , handler , filterCourses}) {

    const changeDisplay = (value) => {
        handler(value)
    }

    const filterHandler = value => {
        filterCourses(value)


    }

    return (
        <div className="container-fluid mb-3">
            
                <div className='row border p-3 align-items-center'>
                    <div className='col-md-6'>
                        <span className={display === "fullWidth" && "icon-active"}
                        onClick={() => changeDisplay("fullWidth")}>
                            <i className="fa fa-list icon-filter-section"></i>
                        </span>
                        <span className={display === "table" && "icon-active"}
                        onClick={() => changeDisplay("table")}>                      
                            <i className="fa fa-table icon-filter-section"></i>
                        </span>
                    </div>
                    <div className='col-md-6'>
                        <select onClick={(event) => filterHandler(event.target.value)}
                        className="form-control selectpicker">
                            <option value="all">All</option>
                            <option value="earliest">Earliest</option>
                            <option value="latest">Latest</option>
                            <option value="cheapest">Cheapest</option>
                            <option value="expensive">Most expensive</option>
                            
                        </select>
                        
                    </div>
                </div>
            
        </div>
    )
}
