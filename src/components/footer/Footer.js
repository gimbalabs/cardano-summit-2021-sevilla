import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
    <FooterContainer>
        <div className="footer-bottom">
                <div className="col ml-3"><p className="text-xs-center">Cardano | OpenResearch and OpenSource since 2017</p></div>
     
        </div>
    </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    .footer-bottom{
        background: var(--mainGray);
        color: var(--mainDark);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
`;