import React, { Component } from 'react';
import {DeleteRounded,Create} from '@material-ui/icons';
import './pages/todos.css';

class Todos extends Component {

    
      
    render(){ 
        //console.log(this.props.todos) 
        const ig={
   
            width: '100%',
            height: 'auto',
            marginRight: '10%'
          
        }

                   return (
                       
                    <div class="row">
                    <div class="col">
                        <table class="table">
                            <thead >
                                <tr>
                                    <th >Titre</th>
                                    <th >Description</th>
                                    <th >Categorie</th>
                                    <th style={{ marginLeft: '70px'}} >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                             { this.props.products.map((product) => (  
                                   <tr>
                                    
                                      <td > <img src={"/images/"+product.src} style={ig} />  </td>
                                      <td >{product.description}  </td>
                                      <td >{product.categorie}  </td>
                                    
                                       <td>
                                       <button onClick={this.props.editstatus.bind(this,product.id)} id={product.id}><Create/></button>                                   
                                      <button onClick={this.props.delTodo.bind(this,product.id)}><DeleteRounded/></button> 
                                     </td> 
                                       {/* */}
                                   </tr>
                              ))  } 
                            </tbody> 
                        </table>
                    </div>
                </div>
                   )
             } 
                     
    
                  
} 


export default Todos 




        /* 
        <div class="row">
              <div class="col">
                  <table class="table">
                      <thead >
                          <tr>
                             
                              <th >id</th>
                              <th >title</th>
                          </tr>
                      </thead>
                      <tbody>
                       { this.props.todos.map((todo) => (  
                             <tr>
                                <td >{todo.id}  </td>
                                <TodoItem key={todo.id} todo={todo}/>
                                 <td> 
                                 <a class="btn btn-success"method="post" href="/donetodo?id=<%=iduser%>&idtodo=<%=todo.id %>" >Terminer</a>                                   
                                <a class="btn btn-danger" method="get" href="/deletetodo?id=<%=iduser%>&idtodo=<%=todo.id %>">Supprimer</a> 
                                 </td>
                             </tr>
                        ))  } 
                      </tbody> 
                  </table>
              </div>
          </div>
        */