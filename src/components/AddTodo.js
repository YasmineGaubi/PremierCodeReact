import React, { Component } from 'react'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import AddBoxIcon from '@material-ui/icons/AddBox';


export class AddTodo extends Component {

     state = {
        src:'',
        title: '',
        description: '',
        categorie: '', 
    }

   //kif nekteb kahaw maghir submit tokhrejli eli ktebtha fel console
   // onChange= (e) => this.setState({ [e.target.name] : e.target.value });
    onChange= (e) => 
      this.setState({ [e.target.name]: e.target.value });  //
    
    
    //Ajout Todo
    onSubmit = (e) => {
        if (this.props.status == true) {
            this.props.editTodo(this.state)
        }else{
            this.props.addTodo(this.state);
            this.setState({ title: '', description: '',categorie: ''}); //the title back to nothing after it's submitted
        }
        e.preventDefault();
}
   
    handleFile = (e) =>{
        this.setState({ [e.target.name]:e.target.files[0].name });  //
        // console.log(e.target.files[0].mozFullPath);

    }
   

    render() {
        const create = !this.props.status ? "Save" :   "Update" ;
        return (
           <form onSubmit={ this.onSubmit}
            style={{ display: 'flex' }}>
               <input
                id= "t"
                 type="text" 
                 name="title"
                 placeholder="Titre ..."
                 style={{ flex: '10', padding:'5px' }}
                 value={this.state.title}
                 onChange={this.onChange}
                />
                <input
                 id="d"
                 type="text" 
                 name="description"
                 placeholder="Description ..."
                 style={{ flex: '10', padding:'5px' }}
                 value={this.state.description}
                 onChange={this.onChange}
                />
                <input
                 id="c"
                 type="text" 
                 name="categorie"
                 placeholder="Categorie ..."
                 style={{ flex: '10', padding:'5px' }}
                 value={this.state.categorie}
                 onChange={this.onChange}
                />
                <input 
                 id="f"
                 className="btn"
                 type="file"
                 name="src"
                 onChange={this.handleFile}
                 style={{flex: '1',padding:"5px"}}
                />
                
                <button
                 className="btn"
                 type="submit"
                 value="Ajouter"
                 style={{flex: '1',padding:"5px",color:"lightblue"}}
            
                >
          {create}
                </button>
           </form>
        )
    }
}

export default AddTodo
