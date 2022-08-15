import React, {useEffect} from 'react';

import {IoPersonCircle} from 'react-icons/io5'
import {useDispatch, useSelector} from "react-redux";
import translate from "../i18n/translate";
import {getBookingsAction} from "../redux/reducer/SearchReducer";
import { BsFillBookmarkCheckFill, BsFillQuestionCircleFill } from "react-icons/bs";


const MyArea = () => {
    const isMenuShown = useSelector(state=>state.store.isMenuShown);
    const userBookings = useSelector(state=>state.searchReducer.userBookings);
    let bookings = [
        {id:2,
        checkin_date: '22-10-2022',
        checkout_date: '28-10-2022',
        hotel_name: 'Issyk-Kul',
        room_name: 'Double standart',
        number_of_people: 2,
        },
        {id:3,
        checkin_date: '22-10-2022',
        checkout_date: '28-10-2022',
        hotel_name: 'Novotel',
        room_name: 'Double standart',
        number_of_people: 2,
        },
        {id:4,
        checkin_date: '22-10-2022',
        checkout_date: '28-10-2022',
        hotel_name: 'Supara',
        room_name: 'Double standart',
        number_of_people: 2,
        },
    ];
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getBookingsAction());

    },[]);

    return (
        <div className="myarea">

            {/*<div className="myarea__nav" style={{display : isMenuShown ? 'none' : 'block'}}>*/}
            {/*    <ul className="myarea__ul">*/}
            {/*        <li className="myarea__first-li">*/}
            {/*            <IoPersonCircle className ="myarea__person"/>*/}
            {/*            <p>Личный кабинет</p>*/}
            {/*            <p>{JSON.stringify(localStorage.getItem('USER'))}</p>*/}
            {/*        </li>*/}
            {/*        <li className="myarea__li">Мои бронирования</li>*/}

            {/*    </ul>*/}

            {/*</div>*/}

            <div className="myarea__bookings">
                <h3 className="myarea__title">{translate('Мои бронирования')}</h3>
                {!userBookings.length ?
                <p className="myarea__no-bookings-text">Список ваших бронирований...</p> :
                    userBookings?.map((el)=>{
                        return <div className="myarea__booking">
                            <div className={el?.is_checkout ? 'myarea__confirmed' : 'myarea__unconfirmed'}>
                                <p className={el?.is_checkout ? 'myarea__confirmed-text' : 'myarea__unconfirmed-text'}>
                                    {el?.is_checkout ? `Бронирование подтверждено ` : 'Бронирование находится на рассмотрении'}
                                </p>
                                {el?.is_checkout ? <BsFillBookmarkCheckFill className='myarea__icon'/> : <BsFillQuestionCircleFill className='myarea__icon'/>}
                            </div>
                            <h4 className="myarea__hotel-name"> <span className="myarea__bold">{translate('Отель')}:</span> {el?.hotel}</h4>
                            <p className="myarea__hotel-dates"><span className="myarea__bold">{translate('Дата заезда')}:</span> {el?.checkin_date}  </p>
                            <p className="myarea__hotel-dates"><span className="myarea__bold">{translate('Дата выезда')}:</span> {el?.checkin_date}</p>
                            {/*<p className="myarea__room"><span className="myarea__bold">{translate('Номер')}:</span> {hotel.room_name}</p>*/}
                            <p className="myarea__people-number"><span className="myarea__bold">{translate('Количество гостей')}:</span> {el?.num_of_guest}</p>

                        </div>
                    })}


            </div>
        </div>
    );
};

export default MyArea;