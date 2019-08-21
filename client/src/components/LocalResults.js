import React from 'react';

const LocalResults = (props) => {

    let numberOfBigMacs = () => {
       return props.userInput / props.localPrice
    }

    return (
        <div>
            {
                props.userInput ? <div>
                                    <p>You could buy {numberOfBigMacs()} Big Macs in your country</p>
                                    <p>Your Dollar Purchasing Parity (PPP) is {props.ppp}</p> 
                                  </div> 
                                :
                                  <div>
                                      <p>You could buy 0 Big Macs in your country</p>
                                      <p>Your Dollar Purchasing Parity (PPP) is {props.ppp}</p> 
                                  </div>
            }
        </div>
    )
}

export default LocalResults;