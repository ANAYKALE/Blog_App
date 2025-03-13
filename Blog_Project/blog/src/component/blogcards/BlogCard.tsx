import React, { useEffect, useState } from 'react'
import './BlogCard.css'


interface Blog {
    name: string;
    path: string;
    bgcolor: string;
}

const BlogCard = (data: Blog) => {
    const { name, bgcolor, path } = data
    return (
        <div style={{
            width:'250px',
            height:'400px',
            background:bgcolor,
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
      <p style={{
        color:'white',
        fontSize:'15px'
      }}>
        {name}
      </p>
    </div>
    )
}

export default BlogCard;