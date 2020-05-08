import React, { Component } from 'react';
import axios from 'axios'
import Review from './Review'

class Comment extends Component {
   
    state = {
       content: '',
       comments: [],
       isLoaded: false,
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


    render() {

        // console.log(this.state.comments)
        
        // const comments = this.state.comments;

        // const comment = comments.map(item => {
        // return <p id="shirt">{item.content}</p>
        // })

        // const nest = this.state.comments ? (
        //     <>
        //        {comment}
        //     </>
        // ) : (
        //     <div>Loading...</div>
        // )




        return (
            <>
                <div className="row" id="comments">
                    <h4>Reviews</h4>
                </div>
                <form  onSubmit={this.handleSubmit}  className="row" id="text-target">
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1" className="common">Leave a comment</label>
                        <textarea onChange={this.handleChange} value={this.state.value}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-light btn-sm" id="commentsubmit">Submit</button>
                </form>
               <div className="row" id="commentsection">
                   {/* <Review newId={this.props.itemId}/> */}
                    <div>
                        {
                            this.state.isLoaded ?
                                <>
                                    {this.state.comments.map(function (item, index) {
                                        return <p id="shirt">{item.content}</p>
                                    })}
                                </>
                                :
                                <div>loading...</div>
                        }
                    </div>
               </div>
            </>
        );
    }
}

export default Comment;
