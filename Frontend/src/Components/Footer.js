import React, {Component} from 'react';

class Footer extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <footer className="page-footer fixed-bottom font-small special-color-dark">
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://github.com/MilindaRanawaka/TicketingSystem"> 2020_REG_WE_06 </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
