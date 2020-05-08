// import React, { Component } from 'react';
// import axios from 'axios'

// class Review extends Component {
   
//     state = {
//         comments: [],
//         isLoaded: false,
//     }

//     componentDidMount() {
//         const newId = this.props.newId
//         console.log(newId,'this is review id')
//         axios.get(`http://localhost:3001/api/v1/items/all/showitem/${newId}`)
//         .then(res => {
//             console.log(res, 'this is aibek')
//             this.setState({
//                 comments: res.data.comments,
//                 isLoaded: true

//             })
//         })
//         .catch(err => console.log(err))
//     }

   

//     render() {
        
//         return (
//             <div>
//                    {
//                        this.state.isLoaded ? 
//                        <>
//                        {this.state.comments.map(function(item, index) {
//                            return <p id="shirt">{item.content}</p>
//                        })}
//                        </>
//                        : 
//                        <div>loading...</div>
//                    }
//             </div>
//         );
//     }
// }

// export default Review;
