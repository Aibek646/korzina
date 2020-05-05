import React, { Component } from 'react';


class Men extends Component {
    render() {
        return (
            // <div className="card-group">
            //     <div className="card">
            //         <img className="card-img-top" src="/images/download.jpeg" alt="Card image cap" id="polo"/> 
            //         <div className="card-body" id="my-row">
            //         <h5 className="card-title text-muted">Card title</h5>
            //          <small className="text-muted">Last updated 3 mins ago</small>
            //     </div>
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="/images/download.jpeg" alt="Card image cap" id="polo" />
            //         <div className="card-body">
            //             <h5 className="card-title text-muted">Card title</h5>
            //             <small className="text-muted">Last updated 3 mins ago</small>
            //         </div>
            //     </div>
            //     <div className="card">
            //         <img className="card-img-top" src="/images/download.jpeg" alt="Card image cap" id="polo" />
            //         <div className="card-body">
            //             <h5 className="card-title text-muted">Card title</h5>
            //             <small className="text-muted">Last updated 3 mins ago</small>
            //         </div>
            //     </div>
            // </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="first-div">
                        <h1 className="main-text">Men's T-shirts</h1>
                    </div>
                    
                </div>
                <div className="row my-row justify-content-between">
                    <div className="col-2 my-col1">
                        <img src="/images/picture1.webp" className="firstpic"></img>
                        <div className="row target-row mt-4">
                            <div className="col">
                                description
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                $$$
                            </div>
                        </div>
                    </div>
                    <div className="col-2 my-col2">
                        <img src="/images/picture2.jpeg" className="firstpic"></img>
                        <div className="row target-row mt-4">
                            <div className="col">
                                description
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                $$$
                            </div>
                        </div>
                    </div>
                    <div className="col-2 my-col3">
                        <img src="/images/picture3.webp" className="firstpic"></img>
                        <div className="row target-row mt-4">
                            <div className="col">
                                description
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                $$$
                            </div>
                        </div>
                    </div>
                    <div className="col-2 my-col3">
                        <img src="/images/picture4.jpeg" className="firstpic"></img>
                        <div className="row target-row mt-4">
                            <div className="col">
                                description
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                $$$
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Men;
