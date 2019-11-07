import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import DashboardProductsContainer from './containers/DashboardProductsContainer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Home from './components/dashboard/Home'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Navbar from './components/layout/Navbar'
import NewBusiness from './components/businesses/NewBusiness'
import BusinessProducts from './components/businesses/BusinessProducts'
import BusinessProduct from './components/businesses/BusinessProduct'
import BusinessEdit from './components/businesses/BusinessEdit'
import CategoryProducts from './components/categories/CategoryProducts'
import CategoryProduct from './components/categories/CategoryProduct'
import { getCurrentUser } from './actions/currentUser'
import { fetchProducts } from './actions/product'
import BusinessesContainer from './containers/BusinessesContainer';



class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.fetchProducts()
  }


  render() {
    const { businesses } = this.props
    console.log("app businesses", businesses)
    return ( 
      <div className="App">
        <Navbar />
        {/* <Search /> */} 
        {/* <Footer /> */}
        <DashboardProductsContainer />
        
        <Switch>           
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/wishlist' component={Wishlist} />
          <Route exact path='/category/:id/products' component={CategoryProducts} />
          <Route exact path='/category/:id/products/:id' component={CategoryProduct} />
          <Route exact path='/businesses/new' component={NewBusiness} />
          <Route exact path='/businesses' component={BusinessesContainer} />
          <Route exact path='/businesses/:id' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            // console.log("business props", business)
            return <BusinessProducts business={business} {...props} />
           }
          }/>

          <Route exact path='/businesses/:id/edit' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            // console.log("business props", business)
            return <BusinessEdit business={business} {...props} />
           }
          }/>
          <Route exact path ='/businesses/:id/products/:id' component={BusinessProduct} />


        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    businesses: state.businessReducer
  };    
}
 
export default connect(mapStateToProps, { getCurrentUser, fetchProducts } )(App);

