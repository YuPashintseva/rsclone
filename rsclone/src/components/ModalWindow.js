import React from 'react';

export default class ModalWindow extends React.Component {
    constructor(props) {
        super(props);
        this.data = props.value;
        console.log(this.data);
    }
    render() {

        if(!this.props.show){
            return null;
        }      
        return <div>Hello Modal</div>;
    }
}
