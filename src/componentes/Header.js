import React from 'react';


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
export default Header;