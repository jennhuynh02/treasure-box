import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/main');
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = { email: this.state.email, password: this.state.password };
        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`errors-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form className="login-session-form" onSubmit={this.handleSubmit}>
                    <h2 className="form-title">Login</h2>
                    <br />
                    <input
                        className="form-inputs"
                        type="text" 
                        value={this.state.email}
                        onChange={this.update('email')}
                        />
                    <br />
                        <label>Email</label>
                    <br />
                    <input
                        className="form-inputs"
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                    />
                        <br />
                        <label>Password</label>
                    {this.renderErrors()}
                    <button className="session-buttons">Log In</button>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);