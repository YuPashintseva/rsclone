import React from 'react';


class GoogleAuth extends React.Component {

    constructor(){
        super();
        this.state={
            isSignedIn: null, userInfo: null
        };
       
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '36766060663-uqo9t1ggc8ks3lanq5fqtfbb4edpisf4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.setState({ userInfo: this.auth.currentUser.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
    showCurrentUserInfo() {
        var googleUser = this.auth.currentUser.get().Mt;
        console.log('users info ', googleUser.Mt);
        return googleUser.Mt;
      }
    
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.setState({ userInfo: this.auth.currentUser.get() });
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
                
                <a onClick={this.onSignOut} className="log-in-button">
                { this.state.userInfo ? <img className="user-img" src={this.state.userInfo.Ds.fI} alt="user image" /> : null}
                { this.state.userInfo  ? this.state.userInfo.Ds.sd : null}
                
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
        return (<a href="/" className="nav-item">{this.renderAuthButton()}</a>);
    }
}

export default GoogleAuth;