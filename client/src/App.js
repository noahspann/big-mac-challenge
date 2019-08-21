import React, { Component } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';
import UserInput from './components/UserInput';
import LocalResults from './components/LocalResults';
import RandomResults from './components/RandomResults';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: 0,
      currentCountry: '',
      localDollarPrice: 0,
      localPrice: 0,
      ppp: 0,
      randomCountry: '',
      randomDollarPrice: 0,
      randomPrice: 0,
      randomPPP: 0
    }

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidMount() {
    Axios.get('/location')
    .then(response => {
      let countryInfo = response.data;
      this.setState({

        currentCountry: countryInfo[0].Country,
        localDollarPrice: parseFloat(countryInfo[0]['Dollar price']),
        localPrice: parseFloat(countryInfo[0]['Local price']),
        ppp: parseFloat(countryInfo[0]['Dollar PPP']),
        randomCountry: countryInfo[1].Country,
        randomDollarPrice: parseFloat(countryInfo[1]['Dollar price']),
        randomPrice: parseFloat(countryInfo[1]['Local price']),
        randomPPP: parseFloat(countryInfo[1]['Dollar PPP'])

      })
    })
  }

  handleUserInput(e) {
    let str = e.target.value;
    str = str.replace(/,/g, "");
    console.log(str)
    let parsed = parseInt(str);
    this.setState({
      userInput: parsed
    })
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <Grid container spacing={10} direction={'column'} alignContent={'center'}>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <UserInput  
            currentCountry={this.state.currentCountry} 
            handleInput={this.handleUserInput}
            handleClick={this.handleClick}
            />
          </Grid>
          <Divider variant='middle'/>
          <Grid item>
            <LocalResults 
            localPrice={this.state.localPrice} 
            userInput={this.state.userInput} 
            ppp={this.state.ppp}
            />
          </Grid>
          <Divider variant='middle'/>
          <Grid item>
            <RandomResults 
            randomCountry={this.state.randomCountry}
            randomPrice={this.state.randomPrice}
            localPrice={this.state.localPrice}
            userInput={this.state.userInput}
            ppp={this.state.randomPPP}
            localDollarPrice={this.state.localDollarPrice}
            randomDollarPrice={this.state.randomDollarPrice}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
