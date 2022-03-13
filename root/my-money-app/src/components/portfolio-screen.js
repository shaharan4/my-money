import React,  { Component } from 'react';

export default class PortfolioScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            cash: '',
            

        }
    }

    render(){
        return (
            <div>
                <p>This is the Portfolio Screen component.</p>
            </div>
        )
    }

}