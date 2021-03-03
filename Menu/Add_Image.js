import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Add_Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      error: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChange(evt){
    const input = this.state.input; // Copy state
    input[evt.target.name] = evt.target.value;
    this.setState({ input });
  }

  validate(dataInput){
    var error = {};
    if(!dataInput.name){
      error.name = "Caption is required";
    }
    else if(!dataInput.image){
      error.name = "Image is required";
    }
    return error;
  }

  onFormSubmit(){
    const error = this.validate(this.state.input);
    this.setState({ error });

    // ada error, jangan proses data
    if (Object.keys(error).length > 0) return;

    else {

      const serverport = {
          caption: this.state.input.name,
          image: this.state.input.image,
      }

      axios.post('http://localhost:3001/Add_Image/' +  this.props.match.params.Email + '/' + this.props.match.params.menu_name, serverport)
      .then(res => console.log(res.data));
      this.setState({
          caption: '',
          image: '',
      });
      
      this.setState({
        result: this.state.input,
        input: {},
      })
      
      this.props.history.push('/Dashboard');
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
            <div class="comment-form-wrap pt-5">
                <h3 class="mb-5">Add Your Image</h3>
                <form action="#" class="p-5 bg-light">
                <div class="form-group">
                    <label for="name">Caption *</label>
                    <div className="error"><font color="red">{this.state.error.name}</font></div>
                    <input type="text" class="form-control" name="name" value={this.state.input.name}
                    onChange={this.handleInputChange}/>
                    <label for="name">Upload Image *</label>
                    <div className="error"><font color="red">{this.state.error.image}</font></div>
                    <input type="file" class="form-control" name="image" value={this.state.input.image}
                    onChange={this.handleInputChange}/>
                </div>
                <div class="form-group">
                {/* <Link to={'/News_Detail/' + this.props.match.params.ID}> */}
                    <div class="form-group">
                        <input type="submit" value="Submit" class="btn btn-primary"
                        onClick={this.onFormSubmit}/>
                    </div>
                {/* </Link> */}
                </div>
                </form>
            </div>
        </div>
      </div>
    )
  }
}
export default Add_Image