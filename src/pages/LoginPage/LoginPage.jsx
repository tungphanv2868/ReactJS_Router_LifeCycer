import { message } from 'antd';
import axios from 'axios';
import React, { Component } from 'react'
import { configHeaders } from '../../api/config';

export default class LoginPage extends Component {
    state = {
        account : "",
        password : "",
    };
    handleChangeForm = (e) => {
        console.log("LoginPage", e.target.name);
        let { value, name } = e.target;
        this.setState({ [name] : value });
    };
    handleLogin = () => {
      axios({
        url: "https://localhost:7242/odata/MemberAccounts",
        method : "POST",
        data: {
          account : this.state.account,
          password : this.state.password,
        },
        headers: {},
        'accessToken' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsIm5hbWUiOiJBZG1pbmlzdHJhdG9yIiwiUm9sZSI6IjEiLCJqdGkiOiIzYzRkYTExOS1kYjMxLTRlZTYtYmIzNy03OWIzNzZiNzZhNjEiLCJuYmYiOjE3MDM1OTg3NzgsImV4cCI6MTcwMzU5ODg5OCwiaWF0IjoxNzAzNTk4Nzc4fQ.zTPdKIjNZI4W756FzoaPH6ilvpI31rE0Xt0smGo7cKE",
        'content-type': 'application/json; charset=utf-8' ,
        'date': 'Tue,26 Dec 2023 14:18:03 GMT ',
        'server': 'Kestrel' 
      })
      .then((res) => {
        console.log(res)
        message.success("login success");
        setTimeout(() => {
          //set time cho nó delay 3s trước khi nó chuyển trang
          window.location.href = "/";
        }, 3000);
        
      })
      .catch((err) => {
        console.log(err)
        message.error("login error")
      });
    };
  render() {
    return (
      <div>
        <div className='container'>
            <div className="form-group">
                <label htmlFor="">Account</label>
                <input name='account' onChange={this.handleChangeForm} 
                type="text" className='form-control' value={this.state.account} id='placeholder' />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input name='password' onChange={this.handleChangeForm}
                type="text" className='form-control' value={this.state.password} id='placeholder' />
            </div>
            <button onClick={this.handleLogin} className='btn btn-success'>Login</button>
        </div>
      </div>
    )
  }
}

// var user = {
//   name : 'alice',
//   age : 2,
// };

// let key = 'name';
// user [key] = 'bob';
