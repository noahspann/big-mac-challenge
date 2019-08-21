import React from 'react';

const RandomResults = (props) => {
    
    let bigMacs = () => {
        return (props.userInput / props.localPrice) * (props.localDollarPrice / props.randomDollarPrice)
    }

    let currencyExchanger = () => {
        return props.userInput * (props.localDollarPrice / props.randomDollarPrice)
    }

    return (
        <div>
            {
                props.userInput ?   <div>
                                        <p>Random Country: {props.randomCountry}</p>
                                        <p>You could buy {bigMacs()} Big Macs in {props.randomCountry} with {props.userInput}</p> 
                                        <p>Your {props.userInput} is worth about {currencyExchanger()} in {props.randomCountry}</p>
                                    </div>
                                :
                                    <div>
                                        <p>Random Country: {props.randomCountry}</p>
                                        <p>You could buy 0 Big Macs in {props.randomCountry} with 0</p>
                                        <p>Your 0 is worth about 0 in {props.randomCountry}</p>
                                    </div>

            }
        </div>
    )
}

export default RandomResults;