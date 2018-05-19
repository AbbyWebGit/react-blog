import React, {Component} from 'react';
import "./list.scss"

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
                <th className='itemTd'>时间</th>
                <th className='itemTd'>题目</th>
                <th className='itemTd'>内容</th>
                <th className='itemTd'>操作</th>
            </thead>
            <tbody>
            {this.state.week.map(function (item, i) {
              return (
                <tr key={i}>
                  <td>{item.time} </td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
                  <td><a>查看</a><a>编辑</a><a>删除</a></td>
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
