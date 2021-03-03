import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Redirect, Switch, Route  } from 'react-router-dom';

export class Dashboard extends Component {
        constructor(props){
                super(props);
                this.state = {
                name:'',
                image:'',
                email:'',
                menu:[],
                count:'',
                };
               }
  componentDidMount() {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        let data1=data;
        console.log(data.data.email)
         this.setState({
                 name: data.data.name,
                 image: data.data.image,
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
      }
        render() {
                return (
                        <React.Fragment>
                                <div class="">
                                        <section class="site-section">
                                        <div class="container">
                                        <div class="row">
                                        <div class="col-md-8 blog-content">
                                                <div class="pt-4">
                                                <h3 class="mb-5">Welcome Back {this.state.name}</h3>
                                                <img src={this.state.image} alt="Logo" />
                                                <ul class="comment-list">
                                                </ul>
                                                </div>
                                        </div>
                                        <div class="col-md-4 sidebar">
                                        <div class="sidebar-box">
                                                <h3 class="pt-3 mb-5">Your Menu</h3>
                                                <div class="categories">
                                                        <div class="">
                                                                <div class="slide">
                                                                        <div class="card-title text-center" data-aos="fade-up">
                                                                        <Link to={'/Add_Menu/' + this.state.email}>
                                                                                <p>{this.state.count}</p>
                                                                        </Link>
                                                                        </div>
                                                                        { this.state.menu.map(list => 
                                                                                {if (list.menu_name != '')
                                                                                        return  <li class="" data-aos="fade-up" data-aos-delay="100">
                                                                                                        <div class="card-title text-center" data-aos="fade-up">
                                                                                                                <Link to={'/Menu_Page/' + list.Email + '/' + list.menu_name}><p>{list.menu_name}</p></Link>
                                                                                                        </div>
                                                                                                </li>
                                                                                else 
                                                                                return <li class="" data-aos="fade-up" data-aos-delay="100">
                                                                                                <div class="card-title text-center" data-aos="fade-up">
                                                                                                        <p>Add Your Menu Here</p>
                                                                                                </div>
                                                                                        </li>
                                                                                }
                                                                        )}
                                                                        <div class="card-title text-center" data-aos="fade-up">
                                                                                <Link to={'/Add_Menu/' + this.state.email}>
                                                                                        <p>Add New Menu</p>
                                                                                </Link>
                                                                        </div>
                                                                        <div class="card-title text-center" data-aos="fade-up">
                                                                                <Link to={'/Delete_Menu/' + this.state.email}>
                                                                                        <p>Delete Menu</p>
                                                                                </Link>
                                                                        </div>
                                                                        <div class="card-title text-center" data-aos="fade-up">
                                                                                <Link to={'/'}>
                                                                                        <p>Log Out</p>
                                                                                </Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        </div>
                                        
                                        </div>
                                        </div>
                                        </section>
                                </div>
                        </React.Fragment>
                )
        }
}

export default Dashboard