import React from 'react'
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const Rating = ({rating, setRating}) => {
    

    const handleChange = value => {
        setRating (value );
    };
    
        return (
        <span>
            <Rate tooltips={desc} onChange={handleChange} value={rating} />
            {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
        </span>
        );
    }

    export default Rating