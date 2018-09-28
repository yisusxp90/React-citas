import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) =>{
    return (
        <div>
            <header>
                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo">{props.title}</a>
                </div>
            </header>
        </div>
    );

}
Header.propTypes = {
    title : PropTypes.string.isRequired    
}
export default Header;