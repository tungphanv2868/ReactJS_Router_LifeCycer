import React, { Component, PureComponent } from 'react'

export default class ChildComponent extends PureComponent {
    constructor(){
        super();
        this.myCountDown = null;
    }
    componentDidMount(){
        console.log("Thôi nôi component con");
        let timer = 30;
        this.myCountDown = setInterval(() => {
            timer--;
            // console.log("timmer: ", timer)
        }, 100)
    }
    componentWillUnmount() {
        
        clearInterval(this.myCountDown);
        console.log("Đăng xuất component con");
    }
  render() {
    console.log("component child rendered")
    return (
      <div className='p-5 bg-warning'>ChildComponent</div>
    )
  }
}
