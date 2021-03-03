import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Edit_Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      error: {},
      error2: {},
      option: '3 Column',
    };
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputChange_Column = this.handleInputChange_Column.bind(this)
    this.onFormSubmit1 = this.onFormSubmit1.bind(this);
    this.onFormSubmit2 = this.onFormSubmit2.bind(this);
    this.validate = this.validate.bind(this);
    this.validate2 = this.validate2.bind(this);
  }

  handleInputChange(evt){
    // const input = this.state.input; // Copy state
    // input[evt.target.name] = evt.target.value;
    const input = this.state.input; // Copy state
    input[evt.target.name] = evt.target.value;
    this.setState({ 
        input
    });
    //console.log(this.state.option + 'aaaaaaa' + evt.target.value + 'aaaaa')
  }

  handleInputChange_Column(evt){
    // const input = this.state.input; // Copy state
    // input[evt.target.name] = evt.target.value;
    this.setState({ 
        option: evt.target.value ,
    });
    console.log(this.state.option + 'aaaaaaa' + evt.target.value + 'aaaaa')
  }

  validate(dataInput){
    var error = {};
    if(!dataInput.col_1){
      error.col_1 = "Column 1 is required";
    }
    else if(!dataInput.col_2){
        error.col_2 = 'Column 2 is required'
    }
    else if(!dataInput.col_3){
        error.col_3 = 'Column 3 is required'
    }
    // else if(!dataInput.col_4){
    //     error.col_4 = 'Column 4 is required'
    // }
    return error;
  }

  validate2(dataInput){
    var error = {};
    if(!dataInput.col_1){
      error.col_1 = "Column 1 is required";
    }
    else if(!dataInput.col_2){
        error.col_2 = 'Column 2 is required'
    }
    else if(!dataInput.col_3){
        error.col_3 = 'Column 3 is required'
    }
    else if(!dataInput.col_4){
        error.col_4 = 'Column 4 is required'
    }
    // else if(!dataInput.col_4){
    //     error.col_4 = 'Column 4 is required'
    // }
    return error;
  }

  onFormSubmit1(){
    const error = this.validate(this.state.input);
    this.setState({ error });
    console.log(this.state.input.col_1 + 'tes 123')

    // ada error, jangan proses data
    if (Object.keys(error).length > 0) return;

    else {
      const serverport = {
          menu_name: this.state.input.name,
          col_1: this.state.input.col_1,
          col_2: this.state.input.col_2,
          col_3: this.state.input.col_3,
      }

      axios.delete('http://localhost:3001/Delete_Table_3_Column/' +  this.props.match.params.Email + '/' + this.props.match.params.menu_name, serverport)
      .then(res => console.log(res.data));
      this.setState({
          menu_name: '',
      });

      axios.post('http://localhost:3001/Add_Table_Header_3/' +  this.props.match.params.Email + '/' + this.props.match.params.menu_name, serverport)
      .then(res => console.log(res.data));
      this.setState({
          menu_name: '',
          col_1: '',
          col_2: '',
          col_3: '',
      });
      
      this.setState({
        result: this.state.input,
        input: {},
      })
      
      this.props.history.push('/Dashboard');
    }
  }

  onFormSubmit2(){
    const error = this.validate2(this.state.input);
    this.setState({ error });

    // ada error, jangan proses data
    if (Object.keys(error).length > 0) return;

    else {
      const serverport = {
          menu_name: this.state.input.name,
          col_1: this.state.input.col_1,
          col_2: this.state.input.col_2,
          col_3: this.state.input.col_3,
          col_4: this.state.input.col_4,
      }

      axios.delete('http://localhost:3001/Delete_Table_4_Column/' +  this.props.match.params.Email + '/' + this.props.match.params.menu_name, serverport)
      .then(res => console.log(res.data));
      this.setState({
          menu_name: '',
      });

      axios.post('http://localhost:3001/Add_Table_Header_4/' +  this.props.match.params.Email + '/' + this.props.match.params.menu_name, serverport)
      .then(res => console.log(res.data));
      this.setState({
          menu_name: '',
          col_1: '',
          col_2: '',
          col_3: '',
          col_4: '',
      });
      
      this.setState({
        result: this.state.input,
        input: {},
      })
      
      this.props.history.push('/Dashboard');
    }
  }

  render() {
    if(this.state.option == '3 Column'){
        return (
        <div className="App">
            <div className="row">
                <div class="comment-form-wrap pt-5">
                    <h3 class="mb-5">Edit Your 3 Column Table Header </h3>
                    <form action="#" class="p-5 bg-light">
                    <div class="form-group">
                        <label for="name">Table</label>
                        <select className="form-control" name="name" value={this.state.input} onChange={this.handleInputChange_Column}>
                            <option>3 Column</option>
                            <option>4 Column</option>
                        </select>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_1">Column 1</label>
                        <div className="error"><font color="red">{this.state.error.col_1}</font></div>
                        <input type="text" class="form-control" name="col_1" value={this.state.input.col_1}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_1">Column 2</label>
                        <div className="error"><font color="red">{this.state.error.col_2}</font></div>
                        <input type="text" class="form-control" name="col_2" value={this.state.input.col_2}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_1">Column 3</label>
                        <div className="error"><font color="red">{this.state.error.col_3}</font></div>
                        <input type="text" class="form-control" name="col_3" value={this.state.input.col_3}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                    {/* <Link to={'/News_Detail/' + this.props.match.params.ID}> */}
                        <div class="form-group">
                            <input type="submit" value="Submit" class="btn btn-primary"
                            onClick={this.onFormSubmit1}/>
                        </div>
                    {/* </Link> */}
                    </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
    else if(this.state.option == '4 Column'){
        return (
        <div className="App">
            <div className="row">
                <div class="comment-form-wrap pt-5">
                    <h3 class="mb-5">Edit Your 4 Column Table Header </h3>
                    <form action="#" class="p-5 bg-light">
                    <div class="form-group">
                        <label for="name">Table</label>
                        <select className="form-control" name="name" value={this.state.input} onChange={this.handleInputChange_Column}>
                            <option>4 Column</option>
                            <option>3 Column</option>
                        </select>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_1">Column 1</label>
                        <div className="error"><font color="red">{this.state.error.col_1}</font></div>
                        <input type="text" class="form-control" name="col_1" value={this.state.input.col_1}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_2">Column 2</label>
                        <div className="error"><font color="red">{this.state.error.col_2}</font></div>
                        <input type="text" class="form-control" name="col_2" value={this.state.input.col_2}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_3">Column 3</label>
                        <div className="error"><font color="red">{this.state.error.col_3}</font></div>
                        <input type="text" class="form-control" name="col_3" value={this.state.input.col_3}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group pt-5">
                        <label for="col_4">Column 4</label>
                        <div className="error"><font color="red">{this.state.error.col_4}</font></div>
                        <input type="text" class="form-control" name="col_4" value={this.state.input.col_4}
                        onChange={this.handleInputChange}/>
                    </div>
                    <div class="form-group">
                    {/* <Link to={'/News_Detail/' + this.props.match.params.ID}> */}
                        <div class="form-group">
                            <input type="submit" value="Submit" class="btn btn-primary"
                            onClick={this.onFormSubmit2}/>
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
}
export default Edit_Table