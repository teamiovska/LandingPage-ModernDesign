import React from 'react';
import {Home} from './Home';
import {Catalog} from './Catalog';
import {Switch, Route} from 'react-router-dom';
import axios from 'axios';

export class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      products:[]
    }
  }

  componentDidMount () {
    this.fetchProducts();
  }

  fetchProducts = () => {
      axios({
        url: 'https://my-json-server.typicode.com/teamiovska/database/products',
        method: 'GET'
      }).then(res => {
        this.setState({
          products: res.data
        })
      })
      .catch(error => {
        alert(error)
      })

  }

  render(){
    return(
      <div id="app">
        <Switch>
          
        <Route exact path = "/" render={()=>{
            return <Home productsList={this.state.products}/>
          }} />
          <Route path = "/catalog" render={()=>{
            return <Catalog productsList={this.state.products}/>
          }}/>
        </Switch>
      </div>
    )
  }
}  
