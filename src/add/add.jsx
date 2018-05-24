import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import E from 'wangeditor'
import "./add.scss"

class Add extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorContent:"",
      editorTitle:"",
    }
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E('#div1', '#div2');
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({editorContent: html})
    }
    editor.create()
  }

  clickHandle() {
    localStorage.setItem('title',this.state.editorTitle);
    localStorage.setItem('content',this.state.editorContent);

    // console.log(this.state.editorTitle,this.state.editorContent)
  }
  handChange(e){
   
    this.setState({ editorTitle:e.target.value})
    // console.log(this.state.editorTitle)


  }
  render() {
    return (
      <div className="addWrap">
        <h1 className="addTitle">添加文章页</h1>
        <div className="addContent">
          <input className="airtertitle" placeholder="无标题" onChange={this.handChange.bind(this)}/> 
          {/* 将生成编辑器 */}
          <div id="div1" className="toolbar"></div>
          <div id="div2" className="text">
            <p>请输入内容</p>
          </div>

        </div>
       
        <div className="btnList">
          <button className="addBtn" onClick={this.clickHandle.bind(this)} >添加</button>
          <button className="addBtn back"><Link to={{pathname: "/main/list"}}>返回</Link></button>
        </div>
      </div>
    );
  }
}

export default Add;
