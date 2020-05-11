import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'


class EditModal extends Component {
     
    state = {
        content: '',
    }


 
    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSumbit = (event) => {
        event.preventDefault()
        const itemId = this.props.itemId
        const commentId = event.target.getAttribute("id")
        console.log(commentId)
        axios.put(`http://localhost:3001/api/v1/items/all/showitem/${itemId}/${commentId}`, this.state)
        .then((res) => {
            console.log(res)
            this.props.history.push(`/items/itemshow/${itemId}`)
        })
        .catch((err) => console.log(err))
        

    }




    render() {
      
   console.log(this.state.comments, 'aibeksssss')
        return (
            <div>
                <Modal size="md" show={this.props.editModal}>
                    <Modal.Header>
                        <Modal.Body>
                            <form onSubmit={this.handleSumbit} className="row" id={this.props.commentId}>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1" className="common">Edit Comment</label>
                                    <textarea onChange={this.handleChange} value={this.state.content} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit"  className="btn btn-light btn-sm" id="commentsubmit">Submit</button>
                               
                            </form>
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            </div>
        );
    }
}

export default EditModal;
