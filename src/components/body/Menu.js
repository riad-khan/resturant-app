import React , { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetails from "./dishDetails";

class Menu extends Component{
    state={
        dishes : DISHES,
        selectDish:null,
    }
    onSelectDish = dish => {
        this.setState({selectDish:dish})
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
                <div className="row">
                    <div className="col-6">
                    {dish}
                    </div>
                    <div className="col-6">
                    {dishDetails}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu