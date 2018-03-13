import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hassError: false,
        errorMessage: ''
    }

    ComponentDidCatch = (error, info) => {
        this.setState({hassError: true, errorMessage: error});
    }

    render() {
        if (this.state.hassError) {
            return <h1>{this.state.errorMessage}</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary