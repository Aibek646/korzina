import React, { Component } from 'react';
import ItemModel from '../models/item'
import Comment from '../components/Comment'

class ItemShow extends Component {
     
    state = {
        name: '',
        description: '',
        price: '',
        color: '',
        color2: '',
        image: '',
        image2: '',
        isLoaded: false,
        defaulColor: true,

    }


    componentDidMount() {
        ItemModel.showItem(this.props.match.params.id)
        .then((res) => {
            console.log('Fount the Item')
            console.log(res.data)
            this.setState({
                name: res.data.name,
                description: res.data.description,
                price: res.data.price,
                color: res.data.color,
                color2: res.data.color2,
                image: res.data.image,
                image2: res.data.image2,
                isLoaded: true,
                
            })
        })
    }
   
    changeColor = () => {
       this.setState({
           defaulColor: false,
       })
    }
    changeColor2 = () => {
        this.setState({
            defaulColor: true,
        })
    }


    render() {

        const image = this.state.defaulColor ? (<img src={this.state.image} id="fetchImage"></img>) : (
            <img src={this.state.image2} id="fetchImage"></img>
        ) 

       const isLoaded = this.state.isLoaded ? (
           <>
           <div className="col-6" id="itemshow1">
               { image }

           </div>
           <div className="col-6" id="itemshow2">
               <h4>{this.state.name}</h4>
               <h4>{this.state.description}</h4>
               <h5>{this.state.price}</h5>
               <small id="small" className="mt-4">Change the color</small>
               <br></br>
               <button  onClick={this.changeColor2} className="btn btn-light btn-circle btn-md" id={this.state.color}></button>
               <button  onClick={this.changeColor} className="btn btn-light btn-circle btn-md" id={this.state.color2}></button>

               {/* <button className="btn btn-light" id="addbag">ADD TO BAG</button> */}
           </div>
           </>
       ) : (
           <div className="center">Loading....</div>
       )



        console.log(this.props)
        return (
            <div className="container">
                <div className="row mt-4">
                    {isLoaded}
                </div>
               <Comment/>
            </div>
        );
    }
}

export default ItemShow;
