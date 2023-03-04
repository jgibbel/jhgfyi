import React, { Component } from 'react';
import '../index.css';
import { withHooksHOC } from './withHooksHOC';

import HamburgerMenu from 'react-hamburger-menu';

import {
  NavLink,
  Link
} from "react-router-dom";

interface IHooksHOCProps {
    width: number;
  }

class Header extends React.Component<IHooksHOCProps> {
    state = {
        open: false
      }
    
      componentDidMount() {
        console.log(this.props.width)
      }
      
    
      handleClick = () => {
        this.setState({open: !this.state.open});
      }
    
      handleClickTop = () => {
        this.setState({open: !this.state.open});
        window.scrollTo(0,0);
      }
    
      displayHamburgerMenu = () => {
        return (
          <div className="burger-icon">
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={40}
                    height={30}
                    strokeWidth={5}
                    rotate={0}
                    color='#0d19a3'
                    borderRadius={0}
                    animationDuration={0.5}
                />
                </div>
        )
    }


displayNavBar = () => {
    return (
      <ul className="nav">
        <NavLink className="underline" to="/about"><li className='nav-link menu-link'>ABOUT</li></NavLink>
        <NavLink className="underline" to="/members"><li className='nav-link menu-link'>MEMBERS</li></NavLink>
        <NavLink className="underline" to="/mission"><li className='nav-link menu-link' >WHAT WE OFFER</li></NavLink>
        <NavLink className="underline" to="/programs"><li className='nav-link menu-link'>PROGRAMS</li></NavLink>
       
        <NavLink className="underline" to="/join"><li className='nav-link menu-link'>JOIN</li></NavLink>
  
      </ul>
    )
  }
  
  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
        <NavLink className="underline" to="/about"><li onClick={this.handleClickTop} className='ham-link menu-link'>ABOUT</li></NavLink>
        <NavLink className="underline" to="/members"><li onClick={this.handleClickTop} className='ham-link menu-link'>MEMBERS</li></NavLink>
        <NavLink className="underline" to="/mission"><li onClick={this.handleClickTop} className='ham-link menu-link'>WHAT WE OFFER</li></NavLink>
        
        <NavLink className="underline" to="/programs"><li onClick={this.handleClickTop} className='ham-link menu-link'>PROGRAMS</li></NavLink>
        <NavLink className="underline" to="/join"><li onClick={this.handleClickTop} className='ham-link menu-link'>JOIN</li></NavLink>
  
      </ul>
    )
  }
    
    render() {
        return (
            <div className="headerBox">
                <div >
                <div ><Link className="headerText" to="/"><h1 className="headerName" >JAMES GIBBEL</h1></Link></div>
                {/* <div className="nav-select">
                    { this.state.open ?  this.displayMobileMenu() : null}
                    {this.props.width > 775 ? this.displayNavBar() : this.displayHamburgerMenu()}
                </div> */}

                </div>
                
            </div>
        );
    }
}

export default withHooksHOC(Header);