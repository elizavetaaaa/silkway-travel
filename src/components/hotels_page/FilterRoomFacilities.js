import React from 'react';
import Filter from "./Filter";
import {useSelector} from "react-redux";
import FilterRoom from "./FilterRoom";

const FilterRoomFacilities = ({props, list}) => {
    let lan = localStorage.getItem('lan');


    return (
        <div className="filterBlock">
            <div className="filterBlock__block">
                <h4 className="filterBlock__title">{props}</h4>
                {list?.map((el)=>{
                    return <FilterRoom props={el} category={'room_category'}/>})}

            </div>

        </div>
    );
};

export default FilterRoomFacilities;