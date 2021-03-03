import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Delete_Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   input: '',
      Column: this.props.match.params.Column,
    //   error: {},
    //   menu:[],
    };
    // this.handleInputChange = this.handleInputChange.bind(this)
    // this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.validate = this.validate.bind(this);
  }

  componentDidMount(){
    if(this.state.Column == '3Column'){
        axios.delete('http://localhost:3001/Delete_Item_Table_3/' + this.props.match.params.item_id)
        .then(res => {
                // const menu = res.data;
                // const count = res.data.length;
                // if (count == 0) {
                //         this.setState({ count : 'Add Your Menu Here'})
                // }
                // console.log(menu);
                // console.log(count);
                // this.setState({ menu,
                // input: res.data[0].menu_name });
        })
    }
    else if(this.state.Column == '4Column'){
        axios.delete('http://localhost:3001/Delete_Item_Table_4/' + this.props.match.params.item_id)
        .then(res => {
                // const menu = res.data;
                // const count = res.data.length;
                // if (count == 0) {
                //         this.setState({ count : 'Add Your Menu Here'})
                // }
                // console.log(menu);
                // console.log(count);
                // this.setState({ menu,
                // input: res.data[0].menu_name });
        })
    }
    this.props.history.push('/Menu_Page/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name);
  }

//   handleInputChange(evt){
//     // const input = this.state.input; // Copy state
//     // input[evt.target.name] = evt.target.value;
//     // this.setState({ input });
//     this.setState({input: evt.target.value});
//   }

//   validate(dataInput){
//     var error = {};
//     if(!dataInput.name){
//       error.name = "Menu Name is required";
//     }
//     return error;
//   }

//   onFormSubmit(){
//     // const error = this.validate(this.state.input);
//     // this.setState({ error });

//     // // ada error, jangan proses data
//     // if (Object.keys(error).length > 0) return;

//     // else {

//       const serverport = {
//           menu_name: this.state.input,
//       }
//       console.log(this.state.input)

//       axios.delete('http://localhost:3001/Delete_Menu/' +  this.props.match.params.Email + '/' + this.state.input, serverport)
//       .then(res => console.log(res.data));
//       this.setState({
//           menu_name: '',
//       });
      
//       this.setState({
//         result: this.state.input,
//         input: {},
//       })
      
//       this.props.history.push('/Dashboard');
//   }
  render() {
    return (
      <div className="App">
        <div className="row">
            <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Delete Your Item</h3>
                {/* <form action="#" class="p-5 bg-light">
                <div class="form-group">
                    <label for="name">Menu Name *</label>
                    <select className="form-control" name="name" value={this.state.input} onChange={this.handleInputChange}>
                        { this.state.menu.map(list =>  <option>{list.menu_name}</option>)}
                    </select>
                    {/* <input type="text" class="form-control" name="name" value={this.state.input.name}
                    onChange={this.handleInputChange}/> */}
            </div>
            {/* <div class="form-group">
                {/* <Link to={'/News_Detail/' + this.props.match.params.ID}> */}
                    {/* <div class="form-group">
                        <input type="submit" value="Delete" class="btn btn-primary"
                        onClick={this.onFormSubmit}/>
                    </div> */}
                {/* </Link> 
                </div>
                </form> */}
            {/* </div>  */}
        </div>
      </div>
    )
  }
}

export default Delete_Item