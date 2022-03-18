import React,  { Component } from 'react';
import "../css/PortfolioScreen.css";

export default class PortfolioScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: '',
            cash: '',
            stocks: [],
            cryptos: []
            
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