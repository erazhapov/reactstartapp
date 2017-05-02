import React, { PureComponent } from 'react';
import s from './Demo.scss';

export default class Demo extends PureComponent {
    render() {
        return (
            <h1 className={s.demo}>{this.props.message}</h1>
        );
    }
}
