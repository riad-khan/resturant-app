import React , { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";
import {CardColumns ,Modal,ModalBody,ModalFooter,Button} from "reactstrap"

class Menu extends Component{
    state={
        dishes : DISHES,
        selectDish:null,
        modalOpen : false,
    }
    onSelectDish = dish => {
        this.setState({selectDish:dish});
        this.toggleModal();
    }
    toggleModal = () =>{
        this.setState({
            modalOpen : !this.state.modalOpen
        })
    }
    render(){
        const dish = this.state.dishes.map( item => {
            return(
                <MenuItem dish={item} key={item.id} selectDish={this.onSelectDish} />
            );
        }) 
        let dishDetails = null
        if(this.state.selectDish != null){
            dishDetails = <DishDetails details={this.state.selectDish}/>
        }
        return(
            <div className="container">
               
                <CardColumns>
                        {dish}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetails}
                        </ModalBody>
                        <ModalFooter>
                            <Button className=" btn btn-danger" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
           
        );
    }
}

export default Menu