import React, {Component} from 'react';
import "./list.scss"
import {Link} from 'react-router-dom'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [1, 2, 3, 45],
      week:[{
        time:"2018-5-3",
        title:"1wewee",
        content:"123ert"},
        {
          time:"2018-5-3",
          title:"2wewee",
          content:"123ert"
        }

    ]
    };

  }
  render() {
    return (
      <div className="editWrap">
      <button className="addBtn"><Link to={{pathname: "/main/add"}}>+ 添加</Link></button>
{/*      
        <ul id="blogList">
          {this.state.user.map(function (item, i) {
              return (
                <li key={i}>
                  <label>{item}</label>
                  <button>delete</button>
                </li>
              );
            })
          }
        </ul> */}
        <table className='itemList'>
            <thead>
            <tr className="ff">
                <td className='itemTd1'>时间</td>
                <td className='itemTd'>题目</td>
                <td className='itemTd'>内容</td>
                <td className='itemTd4'>操作</td>
              </tr>
            </thead>
            <tbody>
            {this.state.week.map(function (item, i) {
              return (
                <tr key={i}>
                  <td>{item.time} </td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td><Link to={{pathname: "/main/detail"}}>查看</Link><Link to={{pathname: "/main/add"}}>编辑</Link><a>删除</a></td>
                </tr>
              );
            })
            }
            </tbody>
          </table>
      </div>
    );
  }
}

export default List;
