import React from 'react';
import "./Footer/footer.css"
const Footer = () => {
    return(
        <div className={"main-footer"}>
                {/*column1*/}
            <div className={"col"}>
                <h4>Contact</h4>
                <u1 className={"clist"}>
                    <li>682-414-0364</li>
                    <li>Dubai Kurukku Santhu</li>
                    <li>Dubai</li>
                </u1>
            </div>
                {/*column2*/}
            <div className={"col1"}>
                <h4>Support</h4>
                <u1 className={"clist"}>
                    <li>america@gmail.com</li>
                    <li>follow us on</li>
                    <li>twitter uh </li>
                </u1>
            </div>
        </div>

    )
}

export default Footer;