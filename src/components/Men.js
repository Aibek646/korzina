import React, { Component } from 'react';
import ItemModel from '../models/item'


class Men extends Component {
      
    state = {
        items: [],
        isLoaded: false,

    }

 
    componentDidMount = () => {
        ItemModel.view()
            .then((res) => {
                console.log('Items in Mount', res)
                this.setState({
                    items: res.data,
                    isLoaded: true
                })
                console.log(this.state.items)
            })

    }


    render() {
        console.log('render')
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="first-div">
                        <h1 className="main-text">Men's T-shirts</h1>
                    </div>
                    
                </div>
                
                {
                    this.state.isLoaded ?

                <div className="row my-row justify-content-between">
                    {  this.state.items.map(function (item, index) {
                        return <div className="col-2 my-col3">
                            <img src={item.image} className="firstpic"></img>
                            <div className="row target-row mt-4">
                                <div className="col">
                                    {item.description}
                            </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {item.price}
                            </div>
                            </div>
                        </div> 
                    }) 

                      } 

                </div>

                : 
                <p>Not Loaded</p>

              }
            </div>
        );
    }
}

export default Men;
