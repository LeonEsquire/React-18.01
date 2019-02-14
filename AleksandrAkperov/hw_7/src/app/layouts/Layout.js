import React from 'react';
import { connect } from 'react-redux';


 class Layout extends React.Component {
    render() {
        console.log(this.props)
        return (
            null
        );
    }
}

function mapStateToProps(state) {

    return {
        
        user:state.user.user
    }
}

export default connect(mapStateToProps)(Layout)