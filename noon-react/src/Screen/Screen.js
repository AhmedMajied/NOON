import React from 'react';
import Modal from 'react-responsive-modal';
import './Screen.css';

/* A modal that opens images and videos for better view */
class Screen extends React.Component{
    state = {
        isOpen: false,
        viewMode: "", /* View modes are: "Photos" - "Videos" */
        viewSource: ""
    };

    /* Screen modes are: "Photos" - "Videos" */
    powerOn = (vmode, vsrc) => {
        this.setState({ isOpen: true, viewMode: vmode, viewSource: vsrc });
    };
    
    powerOff = () => {
        this.setState({ isOpen: false, viewMode: "", viewSource: "" });
    };

    render() {
        var view = null;

        if(this.state.viewMode === "Photos") {
            view = (
                <img className="img img-responsive cmedia-on-screen" alt="" 
                     src={this.state.viewSource} />
            );
        } else if(this.state.viewMode === "Videos") {
            view = (
                <video className="cmedia-on-screen" controls autoPlay>
                    <source src={this.state.viewSource}></source>
                </video>
            );
        }
        return (
            <Modal
                open={this.state.isOpen}
                showCloseIcon = {false}
                onClose={this.powerOff}
                center
                classNames={{
                    modal: 'custom-modal',
                    transitionEnter: 'transition-enter',
                    transitionEnterActive: 'transition-enter-active',
                    transitionExit: 'transition-exit-active',
                    transitionExitActive: 'transition-exit-active',
                }}
                animationDuration={1000}
            >
                <div className="cdiv-viewport">
                    {view}
                </div>
            </Modal>
        );
    }
}

export default Screen;