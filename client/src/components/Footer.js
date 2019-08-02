import React from 'react';

const footerText = {
    fontSize: 12
}

function Footer() {
    return (
      <>
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav
                            className="navbar fixed-bottom navbar-light bg-secondary border-top border-info justify-content-center">
                            <p className="navbar-brand text-center text-white" id="footer-text" style={footerText}>Copyright©&nbsp;&nbsp;Carolyn,
                                Charlie, Claudia, & Jess, 2019</p>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
      </>
    );
  }


export default Footer;