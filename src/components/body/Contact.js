import React ,{Component } from "react";
import {Button,Form,Label,FormGroup,Input,Col} from "reactstrap";
class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email :"",
            phone:"",
            message:"",
            agree: false,
            ContactType : "Email",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = event =>{
        console.log(this.state);
        event.preventDefault();
    }
    handleInputChange = event =>{
      
            const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
            const name = event.target.name;
            this.setState({
                [name] : value,
            })
        
           
    }
    render(){
        document.title ="Resturant App | Contact"
        return(
            <div className="container">
                <div className="row row-content" style={{padding:"20px",textAlign:"left"}}>
                    <div className="col-12 text-center mt-5">
                        <h3>Contact with us</h3>
                    </div>
                    <div className="col-12">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Col md={2}>
                                    <label htmlFor="name">Name :</label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" name="name" placeholder="Your name" onChange={this.handleInputChange} value={this.state.name}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="email">Email :</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="email" name="email" placeholder="Your email address" onChange={this.handleInputChange} value={this.state.email}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="email">Phone Number :</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="text" name="phone" placeholder="Your Phone number"onChange={this.handleInputChange} value={this.state.phone}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="contactType">Contact Type</Label>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="ContactType" onChange={this.handleInputChange}  value={this.state.ContactType}>
                                        <option>Email</option>
                                        <option>Phone Call</option>
                                    </Input>
                                </Col>
                                <Col md={6}>
                                <Label check >
                                    <Input type="checkbox" name="agree"onChange={this.handleInputChange} checked={this.state.agree} /> <strong>May we contact with you</strong>
                                </Label>
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col md={2}>
                                    <Label htmlFor="Message">Message :</Label>
                                </Col>
                                <Col md={10}>
                                    <Input type="textarea" name="message"onChange={this.handleInputChange} placeholder="Your message" value={this.state.message}></Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={12}>
                                    <Button type="submit"  color="primary"onChange={this.handleInputChange} style={{float:"left",}}>Send us Message</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;