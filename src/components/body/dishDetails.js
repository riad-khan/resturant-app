import React from "react";
import {Card,CardImg,CardBody,CardTitle,CardText} from "reactstrap"
const DishDetails = props =>{
    return(
        <div>
            <Card>
                <CardImg top src={props.details.image}></CardImg>
                <CardBody style={{ textAlign:"left"}}>
                    <CardTitle>
                        {props.details.name}
                    </CardTitle>
                    <CardText>
                        {props.details.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetails