import React from 'react'
import pic from '../assets/pic.jpg'
import { SocialIcon } from 'react-social-icons'

const Card = (props) => {
  return (
    <div className='card-parent'>
        <div className='card'>
            <img src={props.img} alt="Zunaib Khan" />
            <h1>{props.user}</h1>
            <h4>{props.position}</h4>
            <p>{props.desc}</p>
            <button id='btn'>Message</button>
            <button>Connect</button>
            <SocialIcon style={{height:40, width:40 ,margin:10, }} url={props.link} />
            <SocialIcon style={{height:40, width:40 ,margin:10,  }} url={props.insta} />
            <SocialIcon style={{height:40, width:40, margin:10,  }} url={props.whatsapp} />

        </div>



    </div>
  )
}

export default Card