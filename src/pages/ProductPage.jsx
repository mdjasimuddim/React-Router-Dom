import React from 'react'
import Menu from '../component/Menu'
import {useParams} from 'react-router-dom'

const ProductPage = () => {
    let {id, name} = useParams()
  return (
    <div>
        <Menu />
        <h3>id = {id}</h3>
        <h4>name = {name} </h4>
        <h1>This is our Product Page</h1>
    </div>
  )
}

export default ProductPage