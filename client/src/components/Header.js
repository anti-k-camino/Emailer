import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li><a href="/auth/google"><i className="fa fa-google" style={{fontSize:"30px", color:"red"}}></i></a></li>
          </div>
        );
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3">
            Credits :<span style={{marginLeft: "3px", fontWeight: "bold"}}>{ this.props.auth.credits }</span>
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render () {
    return (      
      <nav>
        <div className="nav-wrapper grey darken-1">
          <Link to={ this.props.auth ? '/surveys' : '/' } 
            className="left brand-logo" style={{ margin: "0 20px", fontFamily: "Luckiest Guy"}}>
            Emailer
          </Link>
          <ul className="right">
            { this.renderContent() }
          </ul>
        </div>
      </nav>      
    );
  }
};

function mapStateToProps ({ auth }) {
  return { auth };
};

export default connect(mapStateToProps)(Header);
