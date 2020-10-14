import React from 'react';
import { TOKEN_UNAME } from "./config";

export default class AdminHomepage extends React.Component  {
    render() {
        return (
            <div className="container">
                <h1 align="center"> <span className="badge badge-dark">
                    Welcome Admin {localStorage.getItem(TOKEN_UNAME)}
                </span></h1>

            </div>
        );
    }
}
