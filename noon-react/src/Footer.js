import React from 'react';
import './Live-streaming-components/css/footer.css';

export class Footer extends React.Component
{
    render(){
        return(
            <div className="cfooter-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="cdiv-footer-logo">
                            <img src="./images/LiveStream-images/logo/whiteLogo.png" alt="Logo" />
                        </div>
                        <div className="cdiv-footer-copyright">
                            <p>Copyright &copy; 2016 Noon. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cdiv-footer-home">
                            <h5>Home</h5>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><a href="/#idiv-bdy">Football</a></td>
                                        <td>
                                            <a href="/#idiv-bdy">Tennis</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/#idiv-bdy">Bascketball</a>
                                        </td>
                                        <td>
                                            <a href="/#idiv-bdy">Combat Sport</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/#idiv-bdy">Swimming</a>
                                        </td>
                                        <td>
                                            <a href="/#idiv-bdy">Individual Sport</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="/#idiv-bdy">Volleyball</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow us</h5>
                        <div className="cdiv-footer-social-media">
                            <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-facebook" aria-hidden="true"></i>
                            </button></a>
                            <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-twitter"></i></button></a>
                            <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-instagram"></i></button></a>
                            <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-google-plus-g"></i></button></a>
                            <a href="#" target="_blank"><button type="button" className="btn btn-default"><i className="fa fa-youtube"></i></button></a>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control form-control-sm" name="" placeholder="Your email address"/>
                            <input name="" id="" className="btn" type="submit" value="Subscribe"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="cdiv-footer-about-us">
                            <div className="row">
                                <div className="col-sm-6 cdiv-footer-left">
                                    <h5>About us</h5>
                                    <a href="/About-us/#idiv-vision-nav">Vision</a>
                                    <a href="/About-us/#idiv-mission-nav">Mission</a>
                                    <a href="/Contact-us">Contact us</a>
                                </div>
                                <div className="col-sm-6 cdiv-footer-right">
                                    <a href="/Live-streaming"><span className="oi oi-audio"></span> Live Stream</a>
                                    <a href="#"><i className="fa fa-shopping-bag" aria-hidden="true"></i>Shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
