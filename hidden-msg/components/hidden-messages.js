import React from 'react';
import messages from '../asset/string'
import HiddenMessage from './hidden_message';

class HiddenMessages extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            messages,
            showing: -1
        }
    }

    componentWillMount(){
        let {showing, messages} = this.state;
        this.interval = setInterval(
            () => {
                showing ++;
                showing = (showing >= messages.length) ?  0 : showing;
                this.setState({showing})
            }
            ,1000
        );
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        const {messages, showing} = this.state;
        return (
            <div className= "hidden-msgs">
                {messages.map(
                    (message, i) => {
                        return (
                            <HiddenMessage key={i} hide={i !== showing}>
                                {message}    
                            </HiddenMessage>
                        );
                    }
                )}
            </div>
        );
    } 
}

export default HiddenMessages;