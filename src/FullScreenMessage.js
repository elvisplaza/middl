import React, { Component } from 'react';


class FullScreenMessage extends Component {
    constructor() {
        super();
        this.state = {
            messageReply: "",
        }
    }



    handleReplySubmit = (e) => {
        e.preventDefault();
        this.props.replyToMessage(this.props.message.from, this.props.message.sendingUID, this.state.messageReply)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render(){
        console.log("message", this.props.message)
        return(
            <div className="fullScreenMessage">
                <div className="fullScreenMessage__header">
                    <div className="fullScreenMessage__messageDate">
                        {/* <p>{this.props.message.displayDate}</p> */}
                    </div>
                    <div className="fullScreenMessage__from">
                        {/* <p>{this.props.message.from}</p> */}
                    </div>
                </div>
                <div className="fullScreenMessage__messageBody">
                    <div className="fullScreenMessage__messageBodyContents">
                        <p>{this.props.message.message}</p>
                    </div> 
                </div>
                {this.props.message.restaurantSuggestion ? 
                <div>
                    <button onClick={()=>{this.props.recieveRestaurantResult(
                        this.props.message.restaurantSuggestion.restaurantName,
                        this.props.message.restaurantSuggestion.restaurantAddress,
                        this.props.message.restaurantSuggestion.restaurantCity,
                        this.props.message.restaurantSuggestion.restaurantState,
                        this.props.message.restaurantSuggestion.restaurantCountry,
                        this.props.message.restaurantSuggestion.restaurantID
                    )}}>See your date invite!</button>
                </div>: ""}
                <div className="fullScreenMessage__reply">
                    <form onSubmit={this.handleReplySubmit} action="">
                        <label htmlFor="messageReply"></label>
                        <input onChange={this.handleChange} type="text" id="messageReply"/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FullScreenMessage