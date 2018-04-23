import React from 'react';
import { News } from "./Details-components/News"
import "./details.css"

export class Details extends React.Component {
    render() {
        return (
            <div>
                <main id="imain-container" className="container">
                    {/* Begin Main Row */}
                    <div className="row">
                        {/* Begin News Column */}
                        <div className="col-md-9 col-sm-8 col-xs-7">
                            {/* Begin News Row */}
                            <div className="row">
                                {/* Begin News Container */}
                                <News />
                                {/* End News Container */}
                                {/* Begin More News */}
                                <div id="idiv-more-news" className="col-md-4 hidden-sm hidden-xs">
                                    {/* Begin Links */}
                                    <section className="csection-links">
                                        <div className="cdiv-link-title">Link</div>
                                        <div className="cdiv-link-text">
                                            <a href="#">noon.ae/newslink</a>
                                        </div>
                                        <div className="cdiv-print-title">Print</div>
                                        <div className="cdiv-print-text">Print this screen</div>
                                        <div className="cdiv-social">
                                            <a href="#">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-instagram" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                            <a href="#">
                                                <i className="fa fa-youtube" />
                                            </a>
                                        </div>
                                    </section>
                                    {/* End Links */}
                                    {/* Begin News */}
                                    <div className="cdiv-news">
                                        <img className="cimg-news" src="img/news.png" alt="News" />
                                        <time className="cnews-time">
                                            1 min. ago
                    </time>
                                        <div className="cdiv-news-title">
                                            Lorem Ipsum is simply dummy text of the printing
                    </div>
                                        <div className="row">
                                            <div className="cdiv-social col-lg-6 col-xs-12">
                                                <a href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-youtube" />
                                                </a>
                                            </div>
                                            <div className="cdiv-read-more col-lg-6 col-xs-12">
                                                <a href="#">Read More
                          <span className="arrow">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End News */}
                                    {/* Begin News */}
                                    <div className="cdiv-news">
                                        <img className="cimg-news" src="img/news.png" alt="News" />
                                        <time className="cnews-time">
                                            1 min. ago
                    </time>
                                        <div className="cdiv-news-title">
                                            Lorem Ipsum is simply dummy text of the printing
                    </div>
                                        <div className="row">
                                            <div className="cdiv-social col-lg-6 col-xs-12">
                                                <a href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-youtube" />
                                                </a>
                                            </div>
                                            <div className="cdiv-read-more col-lg-6 col-xs-12">
                                                <a href="#">Read More
                          <span className="arrow">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End News */}
                                    {/* Begin News */}
                                    <div className="cdiv-news">
                                        <img className="cimg-news" src="img/news.png" alt="News" />
                                        <time className="cnews-time">
                                            1 min. ago
                    </time>
                                        <div className="cdiv-news-title">
                                            Lorem Ipsum is simply dummy text of the printing
                    </div>
                                        <div className="row">
                                            <div className="cdiv-social col-lg-6 col-xs-12">
                                                <a href="#">
                                                    <i className="fa fa-facebook-f" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-google-plus" />
                                                </a>
                                                <a href="#">
                                                    <i className="fa fa-youtube" />
                                                </a>
                                            </div>
                                            <div className="cdiv-read-more col-lg-6 col-xs-12">
                                                <a href="#">Read More
                          <span className="arrow">→</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End News */}
                                </div>
                                {/* End More News */}
                            </div>
                            {/* End News Row */}
                            {/* Begin Links Row */}
                            <section className="csection-links row csection-links-row hidden-lg hidden-md">
                                <div className="cdiv-link-title">Link</div>
                                <div className="cdiv-link-text">
                                    <a href="#">noon.ae/newslink</a>
                                </div>
                                <div className="cdiv-print-title">Print</div>
                                <div className="cdiv-print-text">Print this screen</div>
                                <div className="cdiv-social">
                                    <a href="#">
                                        <i className="fa fa-facebook-f" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                    <a href="#">
                                        <i className="fa fa-youtube" />
                                    </a>
                                </div>
                            </section>
                            {/* End Links Row */}
                            {/* Begin Comments Row */}
                            <section className="row" id="isection-comments-container">
                                <header id="iheader-comments">
                                    Comments:
                </header>
                                <input id="iinp-write-comment" className="form-control" placeholder="Write a comment..." type="text" />
                                {/* Begin Comment */}
                                <div className="cdiv-comment">
                                    <img src="img/comment.png" alt="User" />
                                    {/* Begin Comment Body */}
                                    <div className="cdiv-comment-body">
                                        {/* Begin Comment Username */}
                                        <div className="cdiv-comment-username">
                                            Maria Sharapova
                    </div>
                                        {/* End Comment Username */}
                                        {/* Begin Comment Text */}
                                        <div className="cdiv-comment-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen
                    </div>
                                        {/* End Comment Text */}
                                        {/* Begin Like-Reply */}
                                        <div className="cdiv-like-reply">
                                            <a href="#">Like</a>
                                            <a href="#">Reply</a>
                                        </div>
                                        {/* End Like-Reply */}
                                        {/* Begin Replies */}
                                        <div className="cdiv-replies">
                                            <img src="img/comment.png" alt="User" />
                                            {/* Begin Reply Body */}
                                            <div className="cdiv-reply-body">
                                                {/* Begin Reply Username */}
                                                <div className="cdiv-reply-username">
                                                    Maria Sharapova
                        </div>
                                                {/* End Reply Username */}
                                                {/* Begin Reply Text */}
                                                <div className="cdiv-reply-text">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </div>
                                                {/* End Reply Text */}
                                                {/* Begin Like-Reply */}
                                                <div className="cdiv-like-reply">
                                                    <a href="#">Like</a>
                                                    <a href="#">Reply</a>
                                                </div>
                                                {/* End Like-Reply */}
                                            </div>
                                            <div className="cdiv-view-more">
                                                <a href="#">
                                                    <span className="arrow">→</span>
                                                    View more replies
                        </a>
                                            </div>
                                            {/* End Reply Body */}
                                        </div>
                                        {/* End Replies */}
                                    </div>
                                    {/* End Comment Body */}
                                </div>
                                {/* End Comment */}
                                {/* Begin Comment */}
                                <div className="cdiv-comment">
                                    <img src="img/comment.png" alt="User" />
                                    {/* Begin Comment Body */}
                                    <div className="cdiv-comment-body">
                                        {/* Begin Comment Username */}
                                        <div className="cdiv-comment-username">
                                            Maria Sharapova
                    </div>
                                        {/* End Comment Username */}
                                        {/* Begin Comment Text */}
                                        <div className="cdiv-comment-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen
                    </div>
                                        {/* End Comment Text */}
                                        {/* Begin Like-Reply */}
                                        <div className="cdiv-like-reply">
                                            <a href="#">Like</a>
                                            <a href="#">Reply</a>
                                        </div>
                                        {/* End Like-Reply */}
                                    </div>
                                    {/* End Comment Body */}
                                </div>
                                {/* End Comment */}
                                {/* Begin Comment */}
                                <div className="cdiv-comment">
                                    <img src="img/comment.png" alt="User" />
                                    {/* Begin Comment Body */}
                                    <div className="cdiv-comment-body">
                                        {/* Begin Comment Username */}
                                        <div className="cdiv-comment-username">
                                            Maria Sharapova
                    </div>
                                        {/* End Comment Username */}
                                        {/* Begin Comment Text */}
                                        <div className="cdiv-comment-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen
                    </div>
                                        {/* End Comment Text */}
                                        {/* Begin Like-Reply */}
                                        <div className="cdiv-like-reply">
                                            <a href="#">Like</a>
                                            <a href="#">Reply</a>
                                        </div>
                                        {/* End Like-Reply */}
                                    </div>
                                    {/* End Comment Body */}
                                </div>
                                {/* End Comment */}
                            </section>
                            {/* End Comments Row */}
                        </div>
                        {/* End News Column */}
                        {/* Begin Profiles Column */}
                        <aside className="col-md-3 col-sm-4 col-xs-5">
                            {/* Begin Advertisement */}
                            <section id="isection-advertisement">
                                <div className="cdiv-space">
                                    <span>Advertising Space</span>
                                </div>
                            </section>
                            {/* End Advertisement */}
                            {/* Begin Profiles */}
                            <div id="idiv-profiles">
                                <div className="cdiv-flag">
                                    Profiles
                </div>
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                                {/* Begin Profile */}
                                <div className="cdiv-profile">
                                    <img src="img/maria.png" alt="User" />
                                    {/* Begin Profile Name */}
                                    <div className="cdiv-profile-name">
                                        Maria Sharapova
                  </div>
                                    {/* End Profile Name */}
                                    {/* Begin Profile Text */}
                                    <div className="cdiv-profile-text">
                                        Lorem Ipsum is simply dummy text of the printing and
                  </div>
                                    {/* End Profile Text */}
                                    {/* Begin Social */}
                                    <div className="cdiv-social">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    {/* End Social */}
                                </div>
                                {/* End Profile */}
                            </div>
                            {/* End Profiles */}
                        </aside>
                        {/* End Profiles Column */}
                    </div>
                    {/* End Main Row */}
                </main>
                {/* End Container */}
                {/* Begin Related Topics */}
                <section className="container-fluid" id="isection-related-topics">
                    <div className="container">
                        <header id="iheader-related-topics">
                            <div className="cdiv-flag">
                                Related Topics
              </div>
                            <div className="cdiv-more">
                                <a href="#">More</a>
                            </div>
                        </header>
                        <div className="col-md-3 col-sm-4 col-xs-6">
                            {/* Begin News */}
                            <div className="cdiv-news">
                                <img className="cimg-news" src="img/news.png" alt="News" />
                                <time className="cnews-time">
                                    1 min. ago
                </time>
                                <div className="cdiv-news-title">
                                    Lorem Ipsum is simply dummy text of the printing
                </div>
                                <div className="row">
                                    <div className="cdiv-social col-lg-6 col-xs-12">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="cdiv-read-more col-lg-6 col-xs-12">
                                        <a href="#">Read More
                      <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End News */}
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6">
                            {/* Begin News */}
                            <div className="cdiv-news">
                                <img className="cimg-news" src="img/news.png" alt="News" />
                                <time className="cnews-time">
                                    1 min. ago
                </time>
                                <div className="cdiv-news-title">
                                    Lorem Ipsum is simply dummy text of the printing
                </div>
                                <div className="row">
                                    <div className="cdiv-social col-lg-6 col-xs-12">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="cdiv-read-more col-lg-6 col-xs-12">
                                        <a href="#">Read More
                      <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End News */}
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 hidden-xs">
                            {/* Begin News */}
                            <div className="cdiv-news">
                                <img className="cimg-news" src="img/news.png" alt="News" />
                                <time className="cnews-time">
                                    1 min. ago
                </time>
                                <div className="cdiv-news-title">
                                    Lorem Ipsum is simply dummy text of the printing
                </div>
                                <div className="row">
                                    <div className="cdiv-social col-lg-6 col-xs-12">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="cdiv-read-more col-lg-6 col-xs-12">
                                        <a href="#">Read More
                      <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End News */}
                        </div>
                        <div className="col-md-3 col-sm-4 col-xs-6 hidden-sm hidden-xs">
                            {/* Begin News */}
                            <div className="cdiv-news">
                                <img className="cimg-news" src="img/news.png" alt="News" />
                                <time className="cnews-time">
                                    1 min. ago
                </time>
                                <div className="cdiv-news-title">
                                    Lorem Ipsum is simply dummy text of the printing
                </div>
                                <div className="row">
                                    <div className="cdiv-social col-lg-6 col-xs-12">
                                        <a href="#">
                                            <i className="fa fa-facebook-f" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-instagram" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                        <a href="#">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </div>
                                    <div className="cdiv-read-more col-lg-6 col-xs-12">
                                        <a href="#">Read More
                      <span className="arrow">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* End News */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
