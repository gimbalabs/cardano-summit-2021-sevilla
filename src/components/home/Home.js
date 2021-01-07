import React from 'react';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 m-5">
                    <h1>Welcome to GimbaLabs!</h1>
                    <p class="lead">Our Mission: Mobilizing everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</p>
                    <p class="lead">Our Vision: A world where as many people as possible are empowered to solve problems using the Cardano platform.</p>
                    <p class="lead">GimbaLabs is a collaborative platform for creating ways to show the world what Cardano can do. Please forgive our appearance while we get this site up and running</p>
                    <p class="lead">We are creating free and open source tools, lessons, and resources that people can learn from. The architecture of this site is one example - more to come on that!</p>
                </div>
                <div className="col m-5">
                    <h1>How can you get involved?</h1>
                    <h4></h4>
                    <div class="card m-5">
                        <h5 class="card-header">Help drive adoption of ADA by participating in the Gimbalabs Local ADA Spending Challenge</h5>
                        <div class="card-body">
                            <h5 class="card-title">At GimbaLabs, we want to help you find ways to participate in the adoption of ADA</h5>
                            <p class="card-text">
                                Over the next few months, we will continue to release APIs and Starter Kits that provide entry points for learning about and building upon what Cardano can do. 
                            </p>
                            <p class="card-text">
                                In our most recent Cardano Starter Kit, we provide an iniital look at "token bundles" on Cardano. WHen See details here and a video description here.
                            </p>
                            <p class="card-text">List of winners</p>
                            <p class="card-text">Why are we doing this?</p>
                            <a href="https://github.com/GimbaLabs/csk-005" class="btn btn-primary m-2">Challenge Description on GitHub</a>
                            <a href="https://youtu.be/HdvTZ5oX2fI" class="btn btn-primary m-2">Video Overview on YouTube</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
