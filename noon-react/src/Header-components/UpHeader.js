import React, { Component } from 'react'

export class UpHeader extends Component {
  render() {
    return (
        <header className="cheader-top-head">
                <div className="container">
                    <div className="cdiv-top-header">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 cdiv-left">
                                <div className="cdiv-logo">
                                    <img src="./images/LiveStream-images/logo/logo.png" alt="Logo" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-sm-6 cdiv-right">
                                <div className="cdiv-top-btns">
                                    <button type="button" className="btn btn-default">Signup</button>
                                    <button type="button" className="btn btn-default">Login</button>
                                    <button type="button" className="btn btn-default"><i className="fa fa-search"></i></button>
                                    <div className="cdiv-search">
                                        <form action='' method=''>
                                            <div className="form-group">
                                                <label htmlFor=""></label>
                                                <input type="text" className="form-control" name="" id="" placeholder="Search"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="cdiv-bottom-btns">
                                    <div className="cdiv-social-media">
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-facebook-f"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-twitter"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-instagram"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-google-plus-g"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-youtube"></i></button></a>
                                        <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-flickr"></i></button></a>
                                    </div>
                                    <div className="cdiv-language">
                                        <div className="dropdown show">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                English <span className="oi" data-glyph="icon-name" title="icon name" aria-hidden="true"></span>

                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item" href="#">Arabic</a>
                                                <a className="dropdown-item" href="#">English</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
  }
}

export default UpHeader
