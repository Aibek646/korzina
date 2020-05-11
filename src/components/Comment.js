import React, { Component } from 'react';
import axios from 'axios'
import Review from './Review'
import EditModal from '../components/EditModal'

class Comment extends Component {
   
    state = {
       comments: [],
       isLoaded: false,
       editModal: false,
       content: '',

    }

    handleChange = (event) => {
          console.log(event.target.value)
          this.setState({
              content: event.target.value
          })
    }

  
    handleSubmit = (event) => {
        event.preventDefault()
        const itemId = this.props.itemId
        const userId = this.props.userId
        console.log(this.state)
        console.log(itemId)
        console.log(userId)
        axios.post(`http://localhost:3001/api/v1/items/all/showitem/${itemId}/comment/${userId}`, this.state)
         .then(res => {
             console.log(res)
             this.setState({
                 comments: res.data
             })
         })
         .catch(err => {
             console.log(err)
         })
    }

    componentDidMount() {
        const newId = this.props.itemId
        console.log(newId, 'this is review id')
        axios.get(`http://localhost:3001/api/v1/items/all/showitem/${newId}`)
            .then(res => {
                console.log(res, 'this is aibek')
                this.setState({
                    comments: res.data.comments,
                    isLoaded: true

                })
            })
            .catch(err => console.log(err))
    }




     handleDelete = (event) => {
         event.preventDefault()
        const itemId = this.props.itemId
        const commentId = event.target.getAttribute("id")
         console.log(event.target.getAttribute("id"));
        const comment = document.getElementById("shirt")
        comment.remove()

       axios.delete(`http://localhost:3001/api/v1/items/all/showitem/${itemId}/${commentId}`)
          .then(res => {
              console.log(res, 'deleted comment')
          })
          .catch(err => console.log(err))
      
    }

    handleEditModal = () => {
        this.setState({
            editModal: true,
        })
    }


    // handleUpdate = (event) => {
    //     event.preventDefault()
    //     const itemId = this.props.itemId
    //     const commentId = event.target.getAttribute("id")
    //     console.log(commentId)
    // }


    render() {

        console.log(this.state.comments)
        
        const comments = this.state.comments;

        const comment = comments.map(item => {
            return ( <div>
            <p  id="shirt">{item.content}<button id={item._id} className="btn btn-danger btn-sm delete-comment" type="button" onClick={this.handleDelete}>Delete</button> <button id={item._id} type="button" onClick={this.handleEditModal}>Edit</button></p>
                <EditModal editModal={this.state.editModal} commentId={item._id} itemId={this.props.itemId} history={this.props.history} />
            </div>
            
            )
        })

        const nest = this.state.comments ? (
            <>
               {comment}
            </>
        ) : (
            <div>Loading...</div>
        )




        return (
            <>
                <div className="row" id="comments">
                    <h4>Reviews</h4>
                </div>
                <form  onSubmit={this.handleSubmit}  className="row" id="text-target">
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1" className="common">Leave a comment</label>
                        <textarea onChange={this.handleChange} value={this.state.content}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        
                    </div>
                    
                    <button type="submit" className="btn btn-light btn-sm" id="commentsubmit">Submit</button>
                </form>
               <div className="row" id="commentsection">
                   {/* <Review newId={this.props.itemId}/> */}
                    <div>
                        {/* {
                            this.state.isLoaded ?
                                <>
                                    {this.state.comments.map(function (item, index) {
                           
                                        return <p id="shirt">{item.content}</p> 
                                        
                                    })}
                                </>
                                :
                                <div>loading...</div>
                        } */}
                        {nest}
                    

                    </div>
                    
               </div>
            </>
        );
    }
}

export default Comment;
