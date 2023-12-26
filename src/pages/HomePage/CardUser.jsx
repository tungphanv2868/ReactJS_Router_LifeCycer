import React, { Component } from 'react'


export default class CardUser extends Component {
  render() {
    let { name, kind } = this.props.user;
    return (
      <div className='col-2 p1'>
        <strong className={kind === "EntitySet" ? "text-success" : "text-danger" }>{name}</strong>
      </div>
    )
  }
}
