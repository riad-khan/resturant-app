import React from "react";
import {Card,CardImg,CardImgOverlay,CardBody,CardTitle} from "reactstrap"
const MenuItem = props =>{
    
    return(
       
            <Card style={{margin:"10px"}}>
                <CardBody>
                    <CardImg  style={{opacity : 0.5}} alt={props.dish.name} src={props.dish.image}></CardImg>
                    <CardImgOverlay>
                        <CardTitle style={{cursor: "pointer"}} onClick={()=>props.selectDish(props.dish)}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
    );
}
export default MenuItem