import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import './App.css';

const uuid = require('uuid') ;

class App extends Component{
  
  state = {


   products: [
    {
      id: 1,
      src: "glasses.jpg",
      title: 'Glasses 2O2O',
      categorie: 'Glasses',
      description: 'Cool Glasses',
      
    },
    {
      id: 2,
      src: "sunglasses.jpg",
      title: 'Sunglasses 2O2O',
      categorie: 'Sun',
      description: 'Very Cool Dresess',
    },
    {
      id: 3,
      src: "jewelry.jpg",
      title: 'Jewelry 2O2O',
      categorie: 'Jewelry',
      description: 'Diamond',
    },
   ],
   create:false,
   mommy :""
      
 }
  //longueurdetodolist = this.state.todos.length

   // method eli tkhalini kif nenzel checkbox twali line-through title
    /*markComplete = (id) => {
      this.setState({products: this.state.products.map (product => {
           if(product.id === id){
              //toggle state
             product.completed = !product.completed
           }
             return product;
      }) });
     } */

     //Edit Todo
     editTodo =objectlifihupdatejdid => {
       this.state.products.forEach((product)=> {
        if (product.id == this.state.mommy) {
              product.title =objectlifihupdatejdid.title
              product.description =objectlifihupdatejdid.description
              product.categorie =objectlifihupdatejdid.categorie
              product.src =objectlifihupdatejdid.src

        }
      });
      // this.setState({
       
      //   create:false
      // });
    };

     //Delete Todo
       delTodo = (id) => {
          this.setState({ products: [...this.state.products.filter(product => product.id!== id)] });

       // verifier si je clique sur le bouton delete, fel console yo5rjouli les ID
       //console.log(id)
     }

    //Add Todo
       addTodo = (objetstatelifihkolchay) => {


          const product = {
            id: uuid.v4(),
            src:objetstatelifihkolchay.src,
            title : objetstatelifihkolchay.title, 
            description :objetstatelifihkolchay.description,
            categorie :objetstatelifihkolchay.categorie 
          }
          this.setState({ products: [product,...this.state.products  ]}); 
          /*
          
          [...this.state.products, product ] = [product1,product2,product3, productjdid]
          
          
          
          
          */
       }
       editstatus = (id) =>{

          
           this.setState({
             create : !this.state.create,
             mommy : id,
           })
      

       }
 
   render() {
    const create = this.state.create ? "Submit" : "Update";
      return (
        <Router>

          <div className="App">
            <div className="container">
              <Header/>

              <Route  path="/" render={props => (

                <React.Fragment>
                    <AddTodo addTodo={this.addTodo} status={this.state.create} editstatus={this.editstatus}  editTodo={this.editTodo}/>
                    <Todos products={this.state.products} 
                           delTodo={this.delTodo}
                           editstatus={this.editstatus}
                      // markComplete={this.markComplete}

                    />
                </React.Fragment>

              )} />  

               <Route path="/about" component={About} />

            </div>
          </div>


        </Router>

             );
           
    }

  }

 

export default App;

const ig={
   
    width: '100%',
    height: 'auto',
    marginRight: '10%'
  
}

