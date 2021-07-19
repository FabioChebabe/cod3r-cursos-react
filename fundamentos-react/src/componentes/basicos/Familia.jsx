import React from 'react'

export default props => {
    return(
        <div>
            {React.Children.map(props.children, child => React.cloneElement(child,props))}
            {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/>
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/> */}
        </div>
    )
}