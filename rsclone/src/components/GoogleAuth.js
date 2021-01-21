import React from 'react';


class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '36766060663-uqo9t1ggc8ks3lanq5fqtfbb4edpisf4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn) {
            return (
                <a onClick={this.onSignOut} className="nav-link log-in-button">
                    Sign Out
                </a>
            );
        } else {
            return (
                <a onClick={this.onSignIn} className="nav-link log-in-button">
                    Sign In
                </a>
            );
        }
    }
    render() {
        return <a herf="/" className="nav-item">{this.renderAuthButton()}</a>;
    }
}

export default GoogleAuth;