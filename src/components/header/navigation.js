import React ,{Component} from "react";
import {Navbar , NavbarBrand, Nav,NavbarToggler,Collapse,NavItem } from "reactstrap";
import {Link} from "react-router-dom"

class Navigation extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen : false
        }
    }

    toggleNavbar =() =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    render(){
        return(
            <div>
                <Navbar dark color="dark" expand="sm" >
                    <NavbarToggler onClick={this.toggleNavbar} />
                         <NavbarBrand className="mr-auto">Resturant App</NavbarBrand>
                            <Collapse navbar isOpen={this.state.isOpen}>
                                <Nav className="ml-auto">
                                    <NavItem>
                                        <Link to="home" className="nav-link white">Home</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/about" className="nav-link white">About us</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="menu" className="nav-link white">Menu</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="contact" className="nav-link white">Contact us</Link>
                                    </NavItem>
                                </Nav>
                                </Collapse>
            </Navbar>
            </div>
        );
    }
    
}
export default Navigation