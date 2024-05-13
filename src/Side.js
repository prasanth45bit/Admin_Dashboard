import './Side.css';
import React from 'react';

function Leftside() {
    return (
        <div class="topleft">
        <div class="top">
            <div class="form"  >
            <div><input class="search" type="text"  placeholder="Search"/></div></div>
            </div>
        <aside class="leftside">
            <div>
            <div class="logo">
                <h2>Slot Portal</h2>
            </div>
            <div>
                <h3>Dashboard</h3>
            </div>
            <div>
                <a href="dashmain.html"><button class="btn">DASHBOARD</button></a>
            </div>
            <div>
            </div>
            <div>
                <a href="acourse.html"><button class="btn">AVAILABLE COURSES</button></a>
            </div>
            <div>
                <a href="mycourse.html"><button class="btn">MY COURSES</button></a>
            </div>
            </div>
            <div>
                <a href="ecourse.html"><button class="btn">ELIGIBLE COURSES</button></a>
            </div>
            <div>
            <div>
                <h3>Others</h3>
            </div>
            <div>
                <a href="login.html"><button class="btn">SIGN OUT</button></a>
            </div>
            </div>
        </aside>
    </div>
    );
}

 export default Leftside