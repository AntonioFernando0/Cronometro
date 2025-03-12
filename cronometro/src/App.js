import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css'

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'INICIAR'
    }
    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
    this.timer = null;


    }

    iniciar(){
      let state = this.state

      if(this.timer !== null){
        clearInterval(this.timer);
        this.timer = null;
        state.botao = 'INICIAR'
      }else{  
        this.timer = setInterval(()=> {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
    }, 100);
    state.botao = 'PAUSAR'

  }
   this.setState(state);
        
    }

    limpar(){
      
        this.timer = setInterval(() => {
          let state = this.state;
          state.numero = 0.0
          this.setState(state)
        })

    }

    render(){
      return(

        <div className='container'>

            <img src={require('./assets/images.png')}/>
          <a className='Timer'>{this.state.numero.toFixed(1)}</a>

          <div className='AreaBtn'>
            <a className='botao' onClick={this.iniciar}>
              {this.state.botao}
            </a>

            <a className='botao' onClick={this.limpar}>
              LIMPAR
            </a>
          </div>
        </div>
      )
    }

}
  
export default App;
