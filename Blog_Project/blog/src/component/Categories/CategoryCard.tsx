import React from 'react'
import './CategoryCard.css'

interface Category {
    name: string;
    path: string;
    bgcolor: string;
}

const CategoryCard = (data: Category) => {
    const { name, bgcolor, path } = data
    return (
        <div style={{
            width:'250px',
            height:'200px',
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

export default CategoryCard;