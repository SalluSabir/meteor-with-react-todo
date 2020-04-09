import React from 'react';

import AccountsUIWrapper from '../AccountsUIWrapper'

export const MainLayout = ({content}) => {
    return (
        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Todo App</span>
                
                <div className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <AccountsUIWrapper />
                </div>
            </nav>

            { content }
            
        </div>
    )
}