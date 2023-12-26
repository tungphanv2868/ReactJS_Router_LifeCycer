import axios from 'axios';
import React, { Component } from 'react'
import { configHeaders } from '../../api/config';
import CardUser from './CardUser';
import { RingLoader } from 'react-spinners';

export default class HomePage extends Component {
  state = {
    userArr: [],
    isLoading: false,
  };
  componentDidMount(){
      this.setState({
        isLoading: true,
      })
      axios({
          url: 'https://localhost:7242/odata',
          method : 'GET',
          headers: configHeaders(),
      })
      .then((res) => {
        console.log(res);
        this.setState({userArr : res.data.value, isLoading: false});
      })
      .catch((err) => {
        console.log(err)
      });
  }
  renderUserList = () => {
    return this.state.userArr.map((item, index) => {
      return <CardUser user= {item} key={index}/>;
    });
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <RingLoader color="#36d7b7" size={100} speedMultiplier={2}/>}
        <div className='row'>{this.renderUserList()}</div>
      </div>
      
    )
  }
}
