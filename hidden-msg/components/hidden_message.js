import React from 'react';
import '../asset/hidden_message.css';

class HiddenMessage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hidden: (this.props.hide)? this.props.hide : true
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({hidden: nextProps.hide})
    }

    
    render () {
        const { children} = this.props;
        const {hidden } = this.state;
        if(hidden)
            return <p> {children.replace(/[a-zA-Z0-9]/g, "x")} </p>;
        else
            return <p> {children} </p>
    } 
}

export default HiddenMessage;