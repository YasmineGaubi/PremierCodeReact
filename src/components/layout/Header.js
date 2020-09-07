import React from 'react'

export default function Header () {
    return (
        <header style={headerStyle}>
            <h1>ProductList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333', //dark grey
    color: '#fad0c4', //couleur lektiba white
    textAlign:'center',   
    padding:'2px 10px 2px 10px',

}

