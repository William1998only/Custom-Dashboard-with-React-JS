import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class Menu_Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Menu_Name: this.props.match.params.menu_name,
        email:'',
        menu:[],
        count:'',
        Images: [],
        Table_3_ID: [],
        Table_4_ID:[],
        Table_3_Head: [],
        Table_4_Head: [],
        Table_3_Head_Col_1: 'No',
        Table_3_Head_Col_2: 'Table',
        Table_3_Head_Col_3: 'Yet',
        Table_4_Head_Col_1: '-',
        Table_4_Head_Col_2: 'No',
        Table_4_Head_Col_3: 'Table',
        Table_4_Head_Col_4: 'Yet',
        Item_Table_Col_3: [],
        Item_Table_Col_4: [],
        Add_Item_Table: 'Add Item Table'
    };
    // this.onFormSubmit1 = this.onFormSubmit1.bind(this);
    // this.onFormSubmit2 = this.onFormSubmit2.bind(this);
  }

  componentDidMount() {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    let data1=data;
    console.log(data.data.email)
     this.setState({
             email: data.data.email,
            })
    console.log(this.state.email)
    axios.get('http://localhost:3001/menu_list/' + data.data.email)
    .then(res => {
            const menu = res.data;
            const count = res.data.length;
            if (count == 0) {
                    this.setState({ count : 'Add Your Menu Here'})
            }
            console.log(menu);
            console.log(count);
            this.setState({ menu });
    })
    // axios.get('http://localhost:3001/menu_page/' + this.props.match.params.Menu_ID) //Get Menu Name
    // .then(res => {
    //   const Menu_Name = res.data[0].menu_name;
    //   console.log(Menu_Name);
    //   this.setState({ Menu_Name });
    // })
    axios.get('http://localhost:3001/menu_image/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name)  //Get Menu Image
    .then(res => {
      const Images = res.data;
      console.log(Images[0].Image_Path);
      this.setState({ Images });
    })
    axios.get('http://localhost:3001/menu_table_3/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name)  //Get Menu Table Head 3 kolom
    .then(res => {
      const Table_3_Head = res.data;
      console.log(Table_3_Head);
      //console.log(Table_3_Head[0].col_1);
      if (res.data.length == 0) {
        this.setState({
          Add_Item_Table: ''
        })
      }
      this.setState({ Table_3_Head,
      Table_3_Head_Col_1: Table_3_Head[0].col_1,
      Table_3_Head_Col_2: Table_3_Head[0].col_2,
      Table_3_Head_Col_3: Table_3_Head[0].col_3,
      Table_3_ID: Table_3_Head[0].table_id
     });
     console.log(this.state.Table_3_Head_Col_1 + 'tes 123')
    //  if (this.state.Table_3_Head[0].Col_1 == 'undefined') {
    //    this.setState({
    //      Add_Item_Table: ''
    //    })
    //  }
    })
    axios.get('http://localhost:3001/menu_table_4/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name)  //Get Menu Table Head 4 Kolom
    .then(res => {
      const Table_4_Head = res.data;
      console.log(Table_4_Head[0].table_id);
      if (res.data.length == 0) {
        this.setState({
          Add_Item_Table: ''
        })
      }
      else {
        this.setState({
          Add_Item_Table: 'Add Item Table'
        })
      }
      this.setState({ Table_4_Head,
      Table_4_Head_Col_1: Table_4_Head[0].col_1,
      Table_4_Head_Col_2: Table_4_Head[0].col_2,
      Table_4_Head_Col_3: Table_4_Head[0].col_3,
      Table_4_Head_Col_4: Table_4_Head[0].col_4,
      Table_4_ID: Table_4_Head[0].table_id
      });
    })
    axios.get('http://localhost:3001/menu_item_table_3/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name) //Get Item Tabel 3 Kolom
    .then(res => {
      const Item_Table_Col_3 = res.data;
      console.log(Item_Table_Col_3);
      this.setState({ Item_Table_Col_3 });
    })
    axios.get('http://localhost:3001/menu_item_table_4/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name) //Get Item Tabel 4 Kolom
    .then(res => {
      const Item_Table_Col_4 = res.data;
      console.log(Item_Table_Col_4);
      this.setState({ Item_Table_Col_4 });
    })
  }

  // onFormSubmit1(id){

  //     axios.delete('http://localhost:3001/Delete_Item_Table_3/' +  id)
  //     .then(res => console.log(res.data));
  //     // this.setState({
  //     //     menu_name: '',
  //     //     col_1: '',
  //     //     col_2: '',
  //     //     col_3: '',
  //     // });
      
  //     // this.setState({
  //     //   result: this.state.input,
  //     //   input: {},
  //     // })
      
  //     // this.props.history.push('/Dashboard');
  //     this.props.history.push('/Menu_Page/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name);
  // }

  // onFormSubmit2(id){
  //   axios.delete('http://localhost:3001/Delete_Item_Table_4/' +  id)
  //     .then(res => console.log(res.data));
  //     // this.setState({
  //     //     menu_name: '',
  //     //     col_1: '',
  //     //     col_2: '',
  //     //     col_3: '',
  //     // });
      
  //     // this.setState({
  //     //   result: this.state.input,
  //     //   input: {},
  //     // })
      
  //     // this.props.history.push('/Dashboard');
  //     this.props.history.push('/Menu_Page/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name);
  // }

  render() {
    return (
      <div className="">
      <section class="site-section">
        <div class="container">
        <div class="row">
        <div class="col-md-8 blog-content">
                <div class="pt-4">
                <h3 class="mb-5">{this.state.Menu_Name}</h3>
                {/* <img src={this.state.image} alt="Logo" /> */}
                <ul class="comment-list">
                { this.state.Images.map(Cat => 
                        <li class="comment" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-md-16">
                        <img src={Cat.Image_Path} width="100%" height="400"/> {//Menampilkan Gambar
                        }
                        </div>
                        <div class="col-md-16">
                        <h3>{Cat.Caption}</h3>
                        </div>
                        </li>
                )}
                </ul>
                <div class="table"> {//tabel 3 kolom
                }
                  <thead>
                    <tr>
                      <th>{this.state.Table_3_Head_Col_1}</th>
                      <th>{this.state.Table_3_Head_Col_2}</th>
                      <th>{this.state.Table_3_Head_Col_3}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Item_Table_Col_3.map(item => 
                    <tr>
                      <td>{item.item_1}</td>
                      <td>{item.item_2}</td>
                      <td>{item.item_3}</td>
                      <td><Link to={'/Delete_Item/3Column/' + item.item_id + '/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name}><p>Delete</p></Link></td>
                      {/* <td><div class="form-group">
                            <input type="submit" value="Delete" class="btn btn-primary"
                            onClick={this.onFormSubmit1(item.item_id)}/>
                        </div></td> */}
                    </tr>)}
                  </tbody>
                </div>
                <div class="table"> {//tabel 4 kolom
                }
                  <thead>
                    <tr>
                      <th>{this.state.Table_4_Head_Col_1}</th>
                      <th>{this.state.Table_4_Head_Col_2}</th>
                      <th>{this.state.Table_4_Head_Col_3}</th>
                      <th>{this.state.Table_4_Head_Col_4}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.Item_Table_Col_4.map(item => 
                    <tr>
                      <td>{item.item_1}</td>
                      <td>{item.item_2}</td>
                      <td>{item.item_3}</td>
                      <td>{item.item_4}</td>
                      <td><Link to={'/Delete_Item/4Column/' + item.item_id + '/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name}><p>Delete</p></Link></td>
                      {/* <td><div class="form-group">
                            <input type="submit" value="Delete" class="btn btn-primary"
                            onClick={this.onFormSubmit2(item.item_id)}/>
                        </div></td> */}
                    </tr>)}
                  </tbody>
                </div>
                </div>
        </div>
            <div class="col-md-4 sidebar">
                <div class="sidebar-box">
                        <h3><Link to={'/Dashboard'}><p>Home</p></Link><h3 class="pt-3 mb-5"></h3></h3>
                        <h3><Link to={'/Edit_Table/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name}><p>Edit Table</p></Link><h3 class="pt-3 mb-5"></h3></h3>
                        <h3><Link to={'/Add_Image/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name}><p>Add Image</p></Link><h3 class="pt-3 mb-5"></h3></h3>
                        <h3><Link to={'/Add_Table_Item/' + this.props.match.params.Email + '/' + this.props.match.params.menu_name}><p>{this.state.Add_Item_Table}</p></Link><h3 class="pt-3 mb-5"></h3></h3>
                </div>
            </div>
        </div>
        </div>
      </section>
      </div>
    )
  }
}
export default Menu_Page