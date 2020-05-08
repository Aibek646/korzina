import React, { Component } from 'react';

class ItemShow extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row mt-4">
                    <div className="col-6" id="itemshow1">
                       <img src="/images/picture3.webp" id="fetchImage"></img>
                        
                    </div>
                    <div className="col-6" id="itemshow2">
                        <h4>Name</h4>
                        <h4>Description</h4>
                        <h5>Price</h5>
                        <small id="small" className="mt-4">Change the color</small>
                        <br></br>
                        <button className="btn btn-light btn-circle btn-md" id="firstcolor"></button>
                        <button className="btn btn-light btn-circle btn-md" id="secondcolor"></button>
                       
                        {/* <button className="btn btn-light" id="addbag">ADD TO BAG</button> */}
                    </div>
                </div>
                <div className="row" id="comments">
                   <h4>Reviews</h4>
                </div>
            </div>
        );
    }
}

export default ItemShow;
