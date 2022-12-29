import React, { Component } from 'react'

export default class Viewcount extends Component {
    constructor(props){
        super(props);
        this.state={Viewpage:''}
    }
    componentDidMount(){
        fetch('/myserver.endpoint', {
            method: 'POST',
            body: JSON.stringify({
              // Add parameters here
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
             .then((response) => response.json())
             .then((data) => {
                console.log(data);
                // Handle data
             })
             .catch((err) => {
                console.log(err.message);
             });
    }
    render() {
    return (
        <div>Viewcount</div>
    )
    }
}
