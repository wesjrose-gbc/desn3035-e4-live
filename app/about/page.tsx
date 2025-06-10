import React from 'react';
import Nav from '../components/nav'
import Header from '../components/header'


export default function Page() {
    return <div className="container py-4">
        <div className="row">

            <Header/>

            <Nav/>

            <div className="col-9">

                <h1>About</h1>
                <p>
                    This is an example project for DESN 3035 E4
                </p>
            </div>

        </div>
    </div>
}