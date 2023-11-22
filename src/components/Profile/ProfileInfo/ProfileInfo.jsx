import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img className={s.pp} src='https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/05/Yep_The-white-sands-and-palm-trees-of-a-tropical-beach_Credit_GettyImages-471781838.jpg?w=2200&h=880&crop=1' />
            </div>
            <div className={s.descriptionBlok}>
                ava+description
            </div>
        </div>


    )
}

export default ProfileInfo;
