import React from 'react';
import './user.css'

const User = (props) => {

    console.log(props.user);
    const { name, username, image, gender, phone, email, city, yearlyIncome} = props.user;

    return (
        <div >
            <article id="users">
                <img src={image} alt="" />
                <p className="nameHover">Full Name <small>(User Name) </small></p>
                <h1 className="name">{name} <small>({username}) </small></h1>

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