import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addToFilterListAction, addToFoodCAtsFilterListAction, addToRoomCatsFilterListAction,
    deleteFilterAction,
    deleteFromFoodCatsFilterListAction, deleteFromRoomCatsFilterListAction
} from "../../redux/reducer/SearchReducer";
import {isDisabled} from "@testing-library/user-event/dist/utils";

const   Filter = ({props, category}) => {

    const dispatch = useDispatch();
    const addedFilterList = useSelector(state => state.searchReducer.addedFilterList);

    const addToFilterList = (value) => {
        if (!addedFilterList.includes(value)) {
            dispatch(addToFilterListAction(value))
            if (category === 'food_category') {
                dispatch(addToFoodCAtsFilterListAction(`food_category=${value}&`))
            } else dispatch(addToRoomCatsFilterListAction(`room_category=${value}&`))

        } else {
            dispatch(deleteFilterAction(value))
            if (category === 'food_category') {
                dispatch(deleteFromFoodCatsFilterListAction(value))
            } else dispatch(deleteFromRoomCatsFilterListAction(value))

        }


    };

    useEffect(() => {
        let arr = document.getElementsByClassName("check-box");
        let checkBoxArray = Array.from(arr);
        checkBoxArray.map((el) => {
            if (!addedFilterList.includes(el.value)) {
                el.checked = false;
            }
        })
    }, [addedFilterList])

    const lan  = localStorage.getItem('lan');
    return (
        <form className="filter">
            <input type="checkbox"
                   value={props.id} className="check-box" onChange={(e) => addToFilterList(e.target.value)}/>
            <p className="filter__name">{lan === 'ru' ? props.room_category_name_ru : props.room_category_name_en}</p>

        </form>
    );
};

export default Filter;