import React, { Component } from 'react'

export class DownHeaderSubCard extends Component {

    constructor(props) {
        super(props)
        this.state={title:this.props.title}
    }
    
  render() {
    return (
        <li><a className="dropdown-item dropdown-toggle" href="#">{this.state.title}</a>
            <ul className="dropdown-menu">
                <div className="row">
                    <div className="col-sm-4">
                        <div className='cdiv-first'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>{this.state.title}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                    </tr>
                                    <tr>
                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                    </tr>
                                    <tr>
                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                    </tr>
                                    <tr>
                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                    </tr>
                                    <tr>
                                        <td><img src="./images/LiveStream-images/icons/flag2.png" alt="Flag" /><a href="#">Emirates</a></td>
                                        <td><img src="./images/LiveStream-images/icons/flag1.png" alt="Flag" /><a href="#">Bahrain</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="cdiv-second">
                            <div className="cart">
                                <div className="image">
                                    <img src="./images/LiveStream-images/general/img1.png" alt="not found" />
                                </div>
                                <div className="text">
                                    <div className="head">
                                        <h6>Bascketball</h6>
                                        <span>1 min ago</span>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="cdiv-third">
                            <div className="cart">
                                <div className="image">
                                    <img src="./images/LiveStream-images/general/img1.png" alt="not found" />
                                </div>
                                <div className="text">
                                    <div className="head">
                                        <h6>Bascketball</h6>
                                        <span>1 min ago</span>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ul>
        </li>
    )
  }
}

export default DownHeaderSubCard
