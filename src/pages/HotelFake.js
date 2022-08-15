import React, {useEffect, useState} from 'react';
import {AiFillCheckCircle} from "react-icons/ai";
import {FaBabyCarriage} from "react-icons/fa";
import Carousel from "react-elastic-carousel";
import {useDispatch, useSelector} from "react-redux";
import star1 from "../icons/1star.svg";
import star2 from "../icons/2star.svg";
import star3 from "../icons/3star.svg";
import star4 from "../icons/4star.svg";
import star5 from "../icons/5star.svg";
import {GiHotMeal} from "react-icons/gi";
import translate from "../i18n/translate";
import {BsCheckAll} from "react-icons/bs";
import {BsFillCaretRightFill} from "react-icons/bs";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import {
    closeBookSuccessAction,
    closePhonePopupAction,
    openPhonePopupAction,
    sendBooking
} from "../redux/reducer/SearchReducer";
import {FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import {useNavigate} from "react-router-dom";






const HotelFake = () => {
    const dispatch = useDispatch();
    const currentHotel = useSelector(state => state.searchReducer.chosenHotel);
    const phonePopupStatus = useSelector(state => state.searchReducer.phonePopupStatus);
    const bookSuccessPopupStatus = useSelector(state => state.searchReducer.bookSuccessPopupStatus);
    let lan = localStorage.getItem('lan');
    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentHotel)
        // if(!currentHotel.length){
        //     window.location.replace("http://localhost:3000/")
        // }
    }, []);

    const [booking, setBooking] = useState({});
    const bookHotel = (value) => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        let newBooking = {
            room: [value.id],
            hotel: currentHotel.id,
            checkin_date: localStorage.getItem("check_in"),
            checkout_date: localStorage.getItem("check_out"),
            num_of_guest: localStorage.getItem("num_of_guests"),
            room_price: Math.round(value?.totat_price),
            phone_number: "+996550406402",
            child_years: [localStorage.getItem('child_years')],
            num_of_adults: localStorage.getItem('num_of_adults'),
            num_of_childs: localStorage.getItem('num_of_childs'),
        };
        setBooking(newBooking);
        dispatch(openPhonePopupAction());


    };
    const [phone, setPhone] = '';
    // useEffect(()=>{
    //     console.log(phone)
    // },[phone])
    const phoneHandler = (phone) => {
        console.log(phone.e);
        booking.phone_number = phone;

        // setPhone(phone.e)
    };


    const bookRoom = () => {
        booking.phone_number = phone;
        console.log("RESULT" + JSON.stringify(booking))
        dispatch(sendBooking(booking))
    };

    const closePopup = () => {
        dispatch(closePhonePopupAction());

    };

    const closeSuccessPopup = () => {
        dispatch(closeBookSuccessAction())
    }
    return (
        <div className="hotel">
            <div className="hotel__phone-popup" style={{display: phonePopupStatus ? 'block' : 'none'}}>
                <button onClick={() => closePopup()}
                        className="hotel__close-popup-btn">х
                </button>
                <p className="hotel__phone-popup-text">{translate('Для отправки запроса на бронирование, пожалуйста, введите Ваш номер телефона')}</p>
                <PhoneInput
                    className="hotel__phone-popup-input"
                    country={'kg'}
                    value={phone}
                    style={{width: '100%'}}
                    onChange={(e) => phoneHandler({e})}
                />
                {/*<PhoneInput/>*/}

                <button className="hotel__phone-popup-btn" onClick={() => bookRoom()}>отправить</button>
            </div>
            <div className="hotel__phone-popup" style={{display: bookSuccessPopupStatus ? 'block' : 'none'}}>
                <p className="hotel__thanks-msg">Благодарим за использование Silk Way Travel!</p>
                <p className="hotel__phone-popup-subtext">{translate('Ваш запрос успешно отправлен и будет рассмотрен в близжайшее время. После чего с Вами свяжутся нашими менеджеры ')}</p>
                <button onClick={() => closeSuccessPopup()} className="hotel__phone-popup-btn">ok</button>

            </div>
            <div className="container hotel__content"
                 // style={{opacity: phonePopupStatus || bookSuccessPopupStatus ? '30%' : '100%'}}
            >

                <div className="hotel__container">
                    <h3 className="hotel__title">dfghjkhgfjklhvgch jhkhj</h3>
                    {/*<img alt="raiting..." className="hotelCard__raiting"*/}
                    {/*     src={currentHotel?.hotel_category[0]?.hotel_category_stars === 1 ?*/}
                    {/*         star1 :*/}
                    {/*         currentHotel?.hotel_category[0]?.hotel_category_stars === 2 ?*/}
                    {/*             star2 :*/}
                    {/*             currentHotel?.hotel_category[0]?.hotel_category_stars === 3 ?*/}
                    {/*                 star3 :*/}
                    {/*                 currentHotel?.hotel_category[0]?.hotel_category_stars === 4 ?*/}
                    {/*                     star4 :*/}
                    {/*                     currentHotel?.hotel_category[0]?.hotel_category_stars === 5 ?*/}
                    {/*                         star5 : ''}/>*/}

                    <p className="hotel__time">{translate('Время регистрации')} : 22:00 - 26:00 </p>
                    <p className="hotel__address">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cumque dolore incidunt? Cumque inventore necessitatibus quaerat repellat rerum sed soluta.</p>
                    <p className="hotel__description">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus autem consequatur, error et eum fugiat, id maiores quis repellat reprehenderit suscipit unde voluptate. Accusamus alias, cumque dolore eius impedit, inventore minima nam omnis optio praesentium quaerat quia quidem quisquam, quo quod reiciendis similique sit veniam voluptatibus voluptatum. Culpa earum facere hic illo sequi! Aspernatur assumenda dicta explicabo fugiat fugit incidunt itaque iusto laborum magni minima necessitatibus perferendis porro, quo reiciendis similique suscipit voluptatum? Dolor enim est eveniet ex fugit ipsam iure maxime molestias, natus necessitatibus nemo nostrum possimus repudiandae sequi sunt totam unde vel veniam! Dicta fuga qui voluptas!
                    </p>
                </div>

                <div className="hotel__container hotel__container-fac">

                    {/*{currentHotel?.images.length ?*/}
                    {/*    <Carousel className="hotel__carousel" itemsToShow={5} pagination={true}*/}
                    {/*              style={{position: 'relative', width: '100%', padding: '0 !important'}}>*/}
                    {/*        {currentHotel?.images?.map((el) => {*/}
                    {/*            return <img className="hotel__img"*/}
                    {/*                        src={el.image_url} alt="image"*/}
                    {/*                // src={`https://silk-travel.herokuapp.com${el.image_url}`} alt="image"*/}
                    {/*            />*/}

                    {/*        })}*/}

                    {/*    </Carousel> : ''*/}

                    {/*}*/}


                </div>
                <h3 className="hotel__subtitle">{translate('Удобства отеля')}</h3>

                <div className="hotel__facilities hotel__hotel-list-facilities">

                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                <div className="hotel__facility"><AiFillCheckCircle className="hotel__room-icon"/>alalalallala</div>
                </div>
                {/*<div className="hotel__facilities hotel__hotel-list-facilities">*/}
                {/*    {*/}
                {/*        currentHotel?.facilities_hotel_id?.map((el) => {*/}
                {/*            return <div className="hotel__facility">*/}
                {/*                <AiFillCheckCircle*/}
                {/*                    className="hotel__room-icon"/> {lan === 'ru' ? el.hotel_category_name_ru : el.hotel_category_name_en}*/}
                {/*            </div>*/}

                {/*        })}*/}
                {/*</div>*/}
                {/*<hr/>*/}
                <div className="hotel__container hotel__container-fac">
                    <div className="hotel__facilities">
                        <h3 className="hotel__subtitle">{translate('Для детей')}</h3>

                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>

                        {/*{*/}
                        {/*    currentHotel?.child_service_id.map((el) => {*/}
                        {/*        return <div className="hotel__facility">*/}
                        {/*            <FaBabyCarriage*/}
                        {/*                className="hotel__room-icon"/> {lan === 'ru' ? el.name_ru : el.name_en}</div>*/}

                        {/*    })}*/}
                    </div>

                    <div className="hotel__facilities">
                        <h3 className="hotel__subtitle">{translate('Питание')}</h3>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>
                        <div className="hotel__facility"><FaBabyCarriage className="hotel__room-icon"/> lalalal</div>

                    </div>

                    {/*<div className="hotel__facilities">*/}
                    {/*    <h3 className="hotel__subtitle">Ознакомьтесь с отзывами об отеле</h3>*/}
                    {/*    <button className="hotel__comment-btn">Читать все отзывы</button>*/}

                    {/*</div>*/}

                </div>
                {/*<hr/>*/}


                <h3 className="hotel__subtitle">Номера</h3>


                <div className="hotel__container hotel__rooms">
                         <div className="hotel__room-div">
                            <h3 className="hotel__room-title">2 х standart</h3>
                            <p className="hotel__price">{translate('Цена')} 2000</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cum deleniti eaque ipsam libero praesentium quas reiciendis saepe vel?</p>

                            <h3 className="hotel__room-subtitle"
                                >{translate('Удобства комнаты')}</h3>

                            <div className="hotel__room-list-facilities">
                                     <div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div>



                                })}
                            </div>
                            {/*<div>*/}
                            {/*    <div className="hotel__room-fac"*/}
                            {/*         style={{display: el?.characteristics_id?.length ? 'block' : 'none'}}>*/}
                            {/*        <h3 className="hotel__room-subtitle">{translate('Дополнительное описание')}</h3>*/}
                            {/*        {el?.characteristics_id.map((category) => {*/}
                            {/*            return <p><IoIosArrowDropdown className="hotel__room-icon"/>{lan === 'ru' ? category.name_ru : category.name_en}*/}
                            {/*            </p>*/}
                            {/*        })}*/}
                            {/*    </div>*/}


                            {/*</div>*/}

                            <button className="hotel__book-btn">
                                    бронь
                            </button>

                        </div>
                         <div className="hotel__room-div">
                            <h3 className="hotel__room-title">2 х standart</h3>
                            <p className="hotel__price">{translate('Цена')} 2000</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad cum deleniti eaque ipsam libero praesentium quas reiciendis saepe vel?</p>

                            <h3 className="hotel__room-subtitle"
                                >{translate('Удобства комнаты')}</h3>

                            <div className="hotel__room-list-facilities">
                                     <div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div><div className="hotel__hotel-fac-div">
                                        <FaRegHeart style={{marginRight: '10px'}}/>
                                        <p >lalalal
                                        </p>
                                    </div>



                                })}
                            </div>
                            {/*<div>*/}
                            {/*    <div className="hotel__room-fac"*/}
                            {/*         style={{display: el?.characteristics_id?.length ? 'block' : 'none'}}>*/}
                            {/*        <h3 className="hotel__room-subtitle">{translate('Дополнительное описание')}</h3>*/}
                            {/*        {el?.characteristics_id.map((category) => {*/}
                            {/*            return <p><IoIosArrowDropdown className="hotel__room-icon"/>{lan === 'ru' ? category.name_ru : category.name_en}*/}
                            {/*            </p>*/}
                            {/*        })}*/}
                            {/*    </div>*/}


                            {/*</div>*/}

                            <button className="hotel__book-btn">
                                    бронь
                            </button>

                        </div>
                </div>


            </div>

        </div>
    );
};

export default HotelFake;


