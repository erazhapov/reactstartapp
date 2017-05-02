import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        return (
            <div>
                Это тестовая страница - {this.props.match.params.message}
            </div>
        );
    }
}
