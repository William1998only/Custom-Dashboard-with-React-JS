import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logintbygoogle from './Login/Logintbygoogle';
import Dashboard from "./Login/Dashboard";
import Add_Menu from './Menu/Add_Menu';
import Menu_Page from './Menu/Menu_Page';
import Delete_Menu from './Menu/Delete_Menu';
import Delete_Item from './Menu/Delete_Item';
import Edit_Table from './Table/Edit_Table';
import Add_Table_Item from './Table/Add_Table_Item';
import Add_Image from './Menu/Add_Image';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>    
        <div className="container">   
          <Switch>    
            <Route exact path='/' component={Logintbygoogle} ></Route>   
            <Route path='/Dashboard' component={Dashboard} ></Route>   
            <Route exact path="/Add_Menu/:Email" component={Add_Menu} />
            <Route exact path="/Add_Image/:Email/:menu_name" component={Add_Image} />
            <Route exact path="/Delete_Menu/:Email" component={Delete_Menu} />
            <Route exact path="/Menu_Page/:Email/:menu_name" component={Menu_Page} />
            <Route exact path="/Edit_Table/:Email/:menu_name" component={Edit_Table} />
            <Route exact path="/Add_Table_Item/:Email/:menu_name" component={Add_Table_Item} />
            <Route exact path="/Delete_Item/:Column/:item_id/:Email/:menu_name" component={Delete_Item} />
            <Route exact path="/Add_Menu/1" component={Dashboard} />
          </Switch>    
        </div>    
      </Router> 
    </div>
  );
}

export default App;
