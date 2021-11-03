
import React from 'react'

function Card({src}) {
    return (
        <div>
            <img style={{height:"auto", maxWidth:"150px", width:"100%", objectFit:"cover"}} src={src}/>
        </div>
    )
}

export default Card