import React from 'react';
import { useParams } from 'react-router';
import SignupDetailCard from '../util/SignupDetailCard';

function SignupDetail() {
    let params = useParams();
    let network = params.id;

    console.log("dadsadsa"+{network})

        return (

                <div className="container">
                    <div className="row">
                        <div className="col">

                        { 
                        <SignupDetailCard network={params}/>
                         }
                    </div>
                  </div>
                </div>

        )
}

export default SignupDetail
