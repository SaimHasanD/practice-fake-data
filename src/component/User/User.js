import React from 'react';
import './user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegular, faPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {

    // console.log(props.user);
    const { name, username, image, gender, phone, email, city, yearlyIncome} = props.user;
    const handleAddUser = props.handleAddUser;

    return (
        <div >
            <article id="users">
                <img src={image} alt="" />
                <h1 className="name">{name} <small>({username}) </small></h1>
                <div className="btnDiv">
                <button className="btn" onClick={() => handleAddUser(props.user)}>Add <FontAwesomeIcon icon={faPlus} /></button>
                <button className="btn">Massage</button>
                </div>

                <h3 id='about'>About</h3>
                <div id='userInfo'>
                <h4>Gender: {gender}</h4>
                <h4>Phone: {phone}</h4>
                <h4>Email: {email}</h4>
                <h4>City: {city}</h4>
                <h3><small>Yearly Income:</small> ${yearlyIncome}</h3>
                </div>
            </article>
        </div>
    );
};

export default User;