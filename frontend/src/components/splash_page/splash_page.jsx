import React from 'react';
import { Link } from 'react-router-dom';
import Team from './team';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      team: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleClickOutside() {
    this.setState({
      open: false,
    });
  }

  handleLogin(type) {
    let email;
    (type === 'admin' ? email = 'admin@krma.com' : email = 'demo@krma.com')
    const { login } = this.props;
    const user = { email, password: '123456' };
    login(user);
  }

  render() {
    const { open, team } = this.state;
    const { openModal } = this.props;
    return (
      <div className="splash-page-full" onClick={this.handleClickOutside}>
        <div className="splash-page-header">
          <div className="button-container" ref={this.container}>
            <button type="button" onClick={this.handleClick}>Begin</button>
            {(open
              ? (
                <div className="login-dropdown">
                  <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li onClick={() => this.handleLogin('demo')}>Demo User</li>
                    <li onClick={() => this.handleLogin('admin')}>Admin User</li>
                    <li onClick={() => this.setState({team: true})}>Our Team</li>
                  </ul>
                </div>
              )
              : null)}
          </div>
        </div>
        <section className="splash-text-container">
          {(!team
            ? (
              <div className="splash-text-main">
                <h1>KRMA</h1>
                <h2> &#34;Kindness, like a boomerang, always returns&#34; </h2>
              </div>
            )
            : <Team />
          )}
        </section>
        <div className="main-instructions" onClick={() => openModal({instructions: -1})}>
          <i className="fa fa-question-circle" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Splash;
