import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 m-5">
                    <h1>Welcome to GimbaLabs!</h1>
                    <p class="mission">Our Mission: Mobilizing everyone in the Cardano community by creating tools and real-world use cases that ignite the public imagination and facilitate adoption.</p>
                    <p class="mission">Our Vision: A world where as many people as possible are empowered to solve problems using the Cardano platform.</p>
                    <p>GimbaLabs is a collaborative platform for creating ways to show the world what Cardano can do. Please forgive our appearance while we work on our branding - we're glad you're here and would love to hear what you hope to get out of this site.</p>
                    <p>We are creating free and open source tools, lessons, and resources that people can learn from. The architecture of this site is one example - more to come on that!</p>
                </div>
                <div className="col m-5">
                    <h1>How can you get involved?</h1>
                    <h3>At GimbaLabs, we want to help you find ways to participate in the adoption of ADA</h3>
                            <p class="mission">
                                Over the next few months, we will continue to release APIs and Starter Kits that provide entry points for learning about and building upon what Cardano can do. 
                            </p>
                    <div class="card m-2">
                        <h5 class="card-header">The Gimbalabs Local ADA Spending Challenge</h5>
                        <div class="card-body">
                            <p class="card-text">
                                In our most recent Cardano Starter Kit, we provide an inital look at "token bundles" on Cardano, and we challenge you to spend ADA in your community today - right now, in January 2021. 
                                
                            </p>
                            <p class="card-text">Why?</p>
                            <p class="card-text">Because the conversations you start today will help to sow the seeds for greater projects later. That shop owner you talk to, maybe they'll come up with the next great idea for a real world use case.</p>
                            <p class="card-text">Or, because when we send the token bundle reward to you, you'll show off the token to your friends, starting a whole new conversation about some potential application of these new tools to solve real problems.</p>
                            <p class="card-text">See details here and a video description here:</p>
                            <a href="https://github.com/GimbaLabs/csk-005" class="btn btn-primary m-2">Challenge Description on GitHub</a>
                            <a href="https://youtu.be/HdvTZ5oX2fI" class="btn btn-primary m-2">Video Overview on YouTube</a>
                            <Link to="/winners" class="btn btn-success m-2">List of Winners</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
