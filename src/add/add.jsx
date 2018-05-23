import React, {Component} from 'react';
// import Router from '../router/mainRouter.js';

import E from 'wangeditor'
import "./add.scss"

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editorContent: ''
    }
  }
  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E('#div1', '#div2');
    // var editor1 = new E('#div1', '#div2') ;
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({editorContent: html})
    }
    editor.create()
  }
  clickHandle() {
    alert(this.state.editorContent)
  }
  render() {
    return (
      <div className="addWrap">
        <h1 className="addTitle">添加文章页</h1>
        <div className="addContent">
          <input className="airtertitle" placeholder="无标题"/> 
          {/* 将生成编辑器 */}
          <div id="div1" className="toolbar"></div>
          <div id="div2" className="text">
            <p>请输入内容</p>
          </div>
          {/* <div ref="editorElem" style={{  textAlign: 'left' }}  className="editor"></div> */}
        </div>

        <button onClick={this
          .clickHandle
          .bind(this)}>获取内容</button>

        <div className="btnList">
          <button className="btnAdd">添加</button>
          <button className="">返回</button>
        </div>
      </div>
    );
  }
}

export default App;
