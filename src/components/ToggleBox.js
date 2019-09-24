import React, { Component } from 'react';

class ToggleBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
        this.className = props.shape + "Box"
    }

    handleClick() {
        this.setState(state => ({ isActive: !state.isActive }));
    }

    render() {
        var borderRadius = (this.props.radius === 'left' ? 'LeftRadius' : !this.props.radius ? 'AllRadius' : 'RightRadius');
        return (
            <div className={this.className + ' ' + (this.state.isActive ? 'Active' : '') + ' ' + borderRadius} onClick={this.props.click ? this.props.click : this.handleClick.bind(this)} >
                <span>{this.props.title}</span>
            </div>
        );
    }
}

export default ToggleBox;