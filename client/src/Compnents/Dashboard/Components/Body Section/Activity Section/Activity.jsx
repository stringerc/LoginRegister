import React from 'react'
import './activity.css'

// IMported Icons ======>>>>>>>>
import {BsArrowRightShort} from 'react-icons/bs';

//Imported Images ================>
import user from '../../../Assets/user(5).jpeg'
import user1 from '../../../Assets/user(3).jpeg'
import user2 from '../../../Assets/user(4).jpeg'
import user3 from '../../../Assets/user (3).png'
import user4 from '../../../Assets/user1.png.jpeg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image " />
          <div className="customerDetails">
            <span className='name'> Steve Crystal</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image " />
          <div className="customerDetails">
            <span className='name'> Jenai Ohem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image " />
          <div className="customerDetails">
            <span className='name'>Martin Cruz</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image " />
          <div className="customerDetails">
            <span className='name'>Shelly Ofelia</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image " />
          <div className="customerDetails">
            <span className='name'>Justina Feraza</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Activity
