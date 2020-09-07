import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class TodoItem extends Component {
    
    //Add style to a method
          getStyle=() => {
              return {
            
                  backgroundColor:'#f4f4f4',
                  padding: '10px',
                  borderBottom:'1px #ccc dotted',
                  textDecoration: this.props.todo.completed ? 
                          'line-through' : 'none'
                     }

       /* getStyle=() => {
            if(this.props.todo.completed){
                return{
                    textDecoration: 'line-through'

                      }
            }else{
                return{
                    textDecoration: 'none'
                      }
            }        
          } */

         }          
           
    render(){ 
        const { id, title, description, categorie } = this.props.product;

          return(

           //<div style={itemStyle}> voir tout en bas
           
          <td>
           <div style={this.getStyle()}>      
                <p>
                   
                     { title }
                     

                    <button style={btnStyle}
                     onClick={this.props.delTodo.bind(this,id)}> x
                    </button>       
                </p>
           </div>
           </td>
        )   
   }
}

// style du bouton supprimer
const btnStyle ={
    background:'#ff0000',
    color: '#fff',
    border:'none',
    padding: '4px 10px', //4px toul , 10px l3ordh
    borderRadius: '80%',  
    cursor:'pointer',  
    float:'right' //3al imin belkol mta3 lpage
}

//Proptypes
TodoItem.propTypes = {
    product: PropTypes.object.isRequired
}


/*
const itemStyle = {
    backgroundColor: '#f4f4f4'
}
*/

