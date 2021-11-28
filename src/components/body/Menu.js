import React , { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";
import COMMENTS from "../../data/comments"
import {CardColumns ,Modal,ModalBody,ModalFooter,Button} from "reactstrap"

class Menu extends Component{
    state={
        dishes : DISHES,
        comment : COMMENTS,
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
        document.title ="Resturant App | Menu"
        const dish = this.state.dishes.map( item => {
            return(
                <MenuItem dish={item} key={item.id} selectDish={this.onSelectDish} />
            );
        }) 
        let dishDetails = null
        if(this.state.selectDish != null){
            const comments = this.state.comment.filter(comment => comment.dishId === this.state.selectDish.id)
            dishDetails = <DishDetails comments = {comments} details={this.state.selectDish}/>
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