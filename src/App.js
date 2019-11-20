import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import DashboardProductsContainer from './containers/DashboardProductsContainer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import About from './components/footer/About'
import Shipping from './components/footer/Shipping'
import Policies from './components/footer/Policies'
import Wishlist from './components/Wishlist'
import Navbar from './components/layout/Navbar'
import Footer from './components/footer/Footer'
import BusinessNew from './components/businesses/BusinessNew'
import BusinessProducts from './components/businesses/BusinessProducts'
import BusinessProduct from './components/businesses/BusinessProduct'
import BusinessEdit from './components/businesses/BusinessEdit'
import CategoryProducts from './components/categories/CategoryProducts'
import CategoryProduct from './components/categories/CategoryProduct'
import { getCurrentUser } from './actions/currentUser'
import BusinessesContainer from './containers/BusinessesContainer'
import ProductNew from './components/products/ProductNew'
import ProductEdit from './components/products/ProductEdit'
import ProductColorNew from './components/products/ProductColorNew'
import Colors from './components/products/Colors'
import ProductColorEdit from './components/products/ProductColorEdit'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    const { businesses } = this.props;
    const { products } = this.props;
    

    return ( 
      <div className="App">
        <Navbar />

        <Switch>           
          <Route exact path='/' component={DashboardProductsContainer} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/policies' component={Policies} />
          <Route path='/wishlist' component={Wishlist} />
          <Route exact path='/category/:id/products' component={CategoryProducts} />
          <Route exact path='/category/:id/products/:id' component={CategoryProduct} />
          <Route exact path='/businesses/new' component={BusinessNew} />
          <Route exact path='/businesses' component={BusinessesContainer} />
          <Route exact path='/businesses/:id' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            // console.log("app business props", business)
            return <BusinessProducts business={business} {...props} />
           }
          }/>

          <Route exact path='/businesses/:id/edit' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            return <BusinessEdit business={business} {...props} />
           }
          }/>

          <Route exact path ='/businesses/:id/products/new' component={ProductNew} />
        
          <Route exact path ='/businesses/:id/products/:id' render={props => {
            const products = businesses.businesses.map(business => business.attributes.products).flat()  
            const product = products ? products.filter(product => product.id === parseInt(props.match.params.id))[0] : null
            return <BusinessProduct product={product} {...props} />
           }
          } /> 


          <Route exact path ='/businesses/:id/products/:id/edit' render={props => {
            const products = businesses.businesses.map(business => business.attributes.products).flat()  
            const product = products ? products.filter(product => product.id === parseInt(props.match.params.id))[0] : null
            return <ProductEdit product={product} {...props} />
           }
          } /> 


          <Route exact path ='/products/:id/colors' component={Colors} />

          <Route exact path='/products/:id/colors/new' render={props => {
            const product = products.products.find(product => product.id === props.match.params.id)
            return <ProductColorNew product={product} {...props} />
           }
          }/>
          
          <Route exact path='/products/:id/colors/:id/edit' render={props => {
            // debugger;
            const colors = products.products.map(product => product.attributes.colors).flat()
            const color = colors? colors.filter(p => p.color_id === parseInt(props.match.params.id))[0] :null
            return <ProductColorEdit color={color} {...props} />
           }
          }/>


        </Switch>
        <Footer />
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    businesses: state.businessReducer,
    products: state.productReducer,
  };    
}
 
export default connect(mapStateToProps, { getCurrentUser } )(App);

