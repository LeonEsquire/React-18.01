import React from 'react';
import PropTypes from 'prop-types';

class LoginItems extends React.Component {

    render() {
        return <input type={this.props.type} value={this.props.title} />
    }
}

LoginItems.defaultProps = {
    type: "text",
    title: "..."
};

LoginItems.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};


export default LoginItems;