import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {}
    }
    render(){
      return(

        <div className='container'>

            <img src={require('./assets/images.png')}/>
          <a className='Timer'>0.0</a>

          <div className='AreaBtn'>
            <a className='botao'>
              INICIAR
            </a>

            <a className='botao'>
              LIMPAR
            </a>
          </div>
        </div>
      )
    }

}
  
export default App;
