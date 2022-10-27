import React from "react";
import Main from "../template/Main"

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon="home" title="Home" subtitle="A simple CRUD system">
        <div className="display-4">Welcome!</div>
        <hr/>
        <p className="mb-0">
            Hi! I'm lrb7dev (Luan Rabelo) and this is my <br/>
            simple CRUD system! <br/> 
            I hope you enjoy it! <br/>
            <hr></hr>
            <span className="final-notes">Note: With a responsive CSS</span>
        </p>
    </Main>