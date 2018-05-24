import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Detail extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: localStorage.getItem("title"),
            content: localStorage.getItem("content")
        }
    }
   
//  将内容放到html对象里面
    createMarkup() {
        return {__html: this.state.content};
    }


    render() {
        return (
            <div className="detailWrap">
                <h1 className="detailTitle">{this.state.title}</h1>
                <div className="headImg"></div>
                <div className="detailContent">  
                  {/* 将html转化成页面 */}
                    <div dangerouslySetInnerHTML={this.createMarkup()}/>

                </div>

            </div>
        );
    }
}

export default Detail;
