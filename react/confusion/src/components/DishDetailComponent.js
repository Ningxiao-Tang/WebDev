import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'



    

    //渲染点击Card
    function renderDish({dish}) {
        // console.log(dish)
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    function renderComments({comments}){
        // console.log(comments)
        if (comments != null) {
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        }
        else{
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) =>{

        // console.log(this.props.dishSelect)
        const {dish} = this.props;
        console.log(this.props);

        return dish?(
            <div className="container">
                <div className="row">
                        <renderDish dish={props.dish} />
                        <renderComments comments={props.dish.comments}/>
                </div>
            </div>
        ):(
            <div></div>
        )
    }

export default DishDetail