import React from 'react';
import './Input.css'

export default props => {
    const aleatorio = parseInt(Math.random() * 100);
    console.log(aleatorio)
    return (<div>
        {aleatorio}
    </div>)
}