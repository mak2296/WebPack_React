import React from 'react';
import classNames from 'classnames'
import style from '../assets/css/style.css'

import image from '../assets/images/download.png'
export default class App extends React.Component {


    render() {

        return(
            <div className={classNames(style.mak,style.ani)}>
                hello
                <p>World !!</p>
                <img src={image} />
            </div>
        )

    }

}