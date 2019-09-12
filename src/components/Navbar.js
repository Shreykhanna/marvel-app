import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default class Navbar extends React.Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5 ">
                    <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                     <Link to="/" className="nav-link"> Marvel </Link>
                    </li>
                </ul>
            </NavWrapper>
        )
    }
}
const NavWrapper = styled.nav`
      background:var(--lightRed);
      .nav-link{
        color:var(--mainWhite)!important;
        font-size:2.3rem;
        text-transform:capitalize;
      }`