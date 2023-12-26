import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  routes = [
    {
      path : "/",
      name : 'Home',
    },
    {
      path : '/login',
      name : 'Login',
    },
    {
      path : '/life-cycle',
      name : 'Life Cycle',
    }
  ]
  render() {
    return (
      <div>
        {/* <NavLink className="btn btn-info mx-5" to="/">Home</NavLink>
        <NavLink className="btn btn-info mx-5" to="/login">Login</NavLink>
        <NavLink className="btn btn-info mx-5" to="/login">Login</NavLink> */}

        {this.routes.map(({path, name}, index) => {
          return (
          <NavLink to={path} className="mx-3 btn btn-info" key={index}>
            {name}
          </NavLink>
          );
        })}
      </div>
    )
  }
}
