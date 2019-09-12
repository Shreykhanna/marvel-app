import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {ProductConsumer} from './context'
export default class Characters extends React.Component {
  render(){
    const { id, name, description, thumbnail } = this.props.item;
    return(
      <CharacterWrapper className="col 9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
        <div className="card-title"/>{name}</div>
        <ProductConsumer>
        {value=>(
        <div className="img-container p-5" onClick={() => value.handleDetail(id)} >
       <Link to="/details">
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} className="card-img-top"></img>
        </Link>
        </div>
          )}
        </ProductConsumer>
      </CharacterWrapper>
      )
    }
}
const CharacterWrapper = styled.div`
.card{
  border-color:transparent;
  transition:all 0.2s linear;
}
.card-footer{
  background:transparent;
  border-top:transparent;
  transition:all 0.2s linear;
}
&:hover{
  .card{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
  }
}
.card-footer{
  background:rgba(247,247,247);
}
.img-container{
  position:relative;
  overflow:hidden;
}
.card-img-top{
  transition:all 0.2s linear;
}
.img-container:hover .card-img-top{
  transform:scale(1.2);
}
.cart-btn{
  position:absolute;
  bottom:0;
  right:0;
  padding:0.2rem 0.4rem;
  background:var(--lightBlue);
  border:none;
  color:var(--mainWhite);
  font-size:1.4rem;
  border-radius:0.5rem 0 0 0;
  transform:translate(100%,100%);
  transition:all 0.2s linear;
}
.img-container:hover .cart-btn{
  transform:translate(0,0);
}
.cart-btn:hover{
  color: var(--mainBlue);
  cursor:pointer;
}`