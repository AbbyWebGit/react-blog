import React, {Component} from 'react';
import { withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom';
import "./detail.scss"


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
                <div className="headImg clearfix">
                    <div className="imgLeft"><Link to={{pathname: "/main/list"}}><img src={require('../images/head.jpg')}/></Link>
                        <span className="author">木槿暖暖</span><span className="time">2018.05.24</span>
                    </div>
                    <button className="addBtn">编辑文章</button>
                </div>
                <div className="detailContent">
                    {/* 将html转化成页面 */}
                    <div dangerouslySetInnerHTML={this.createMarkup()}/>

                </div>

            </div>
        );
    }
}

export default Detail;
