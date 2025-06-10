import React from 'react';
import Nav from '../components/nav'
import Header from '../components/header'


export default function Page() {
    return <div className="container py-4">
        <div className="row">

            <Header/>

            <Nav/>

            <div className="col-9">

                <h1>Contact</h1>
                <p>
                    This is the contact page, contact me at 555 - 555 -5555
                </p>
            </div>

        </div>
    </div>
}