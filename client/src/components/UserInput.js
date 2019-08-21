import React from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import MaskedInput from 'react-text-mask';
import Typography from '@material-ui/core/Typography';


const UserInput = (props) => {
    
    const numberMask = createNumberMask({
        prefix: ''
    })
    return (
        <div>
            <Typography variant="h5" color="inherit" align="center">
                You are in {props.currentCountry}
            </Typography>
            <Typography color="inherit" align="center">
            Please enter an amount of money in your local currency <br/>
            <MaskedInput mask={numberMask} onChange={props.handleInput}></MaskedInput>
            </Typography>
        </div>        
    )
}

export default UserInput;