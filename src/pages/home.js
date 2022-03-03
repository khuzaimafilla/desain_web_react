import React from 'react';


export default class Home extends React.Component{
    render(){
        return(
            <div>
                <div className = 'container'>

                <div className = 'text-center'>
                        <h1>Instagrown.</h1>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                        <img src ="https://tse3.mm.bing.net/th?id=OIP.5CZK5T2eCEd8q_sspWunRAHaDe&pid=Api&P=0&w=332&h=155" class="bd-placeholder-img card-img-top" width="100%" height="400" role="img" ></img>

                        <div className="card-body">
                        <p className="card-text">Live in a world full of trials, survive in swarms of charming living creatures. with the fragrant and cool nature of the beauty of God's paintings..</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" class="btn btn-danger">Like</button>
                            <button type="button" class="btn btn-light">Comment</button>
                            </div>
                            <small className="text-muted">2 days ago</small>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col">
                    <div className="card shadow-sm">
                        <img src ="https://tse2.mm.bing.net/th?id=OIP.F34r1GE6HP9j5CAX7U3zLAHaEo&pid=Api&P=0&w=297&h=185" class="bd-placeholder-img card-img-top" width="100%" height="400" role="img" ></img>

                        <div className="card-body">
                        <p className="card-text">P.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <button type="button" class="btn btn-danger">Like</button>
                            <button type="button" class="btn btn-light">Comment</button>
                            </div>
                            <small className="text-muted">2 days ago</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}