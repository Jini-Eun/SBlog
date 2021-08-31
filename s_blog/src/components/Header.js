import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div>
                <h3> This is Soll's Blog </h3>
                {this.state.login
                    ? <h5> <Link to='/write'> 포스트 작성 </Link> </h5>
                    : null
                }

            </div>
        );
    }
}

export default home;
