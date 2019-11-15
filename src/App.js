import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Route, Switch } from 'react-router-dom' 
import DashboardProductsContainer from './containers/DashboardProductsContainer'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import About from './components/About'
import Wishlist from './components/Wishlist'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
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
import ProductColorEdit from './components/products/ProductColorEdit'


class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    const { businesses } = this.props;
    // console.log("app businesses", businesses)

    const { products } = this.props;
    const { colors } = this.props;
    // console.log("app products", products)

    

    return ( 
      <div className="App">
        <Navbar />
        {/* <Search /> */} 
        
        <Switch>           
          <Route exact path='/' component={DashboardProductsContainer} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Register} />
          <Route path='/about' component={About} />
          <Route path='/wishlist' component={Wishlist} />
          <Route exact path='/category/:id/products' component={CategoryProducts} />
          <Route exact path='/category/:id/products/:id' component={CategoryProduct} />
          <Route exact path='/businesses/new' component={BusinessNew} />
          <Route exact path='/businesses' component={BusinessesContainer} />
          <Route exact path='/businesses/:id' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            console.log("app business props", business)
            return <BusinessProducts business={business} {...props} />
           }
          }/>

          <Route exact path='/businesses/:id/edit' render={props => {
            const business = businesses.businesses.find(business => business.id === props.match.params.id)
            // console.log("business props", business)
            return <BusinessEdit business={business} {...props} />
           }
          }/>

          <Route exact path ='/businesses/:id/products/new' component={ProductNew} />
        
          <Route exact path ='/businesses/:id/products/:id' render={props => {
            const businessId = props.match.url[12] + props.match.url[13]
            const business = businesses.businesses.find(business => business.id === businessId )        
            const product = business ? business.attributes.products.filter(product => product.id === parseInt(props.match.params.id) )[0] : null
            return <BusinessProduct business={business} product={product} {...props} />
           }
          } /> 


          <Route exact path ='/businesses/:id/products/:id/edit' render={props => {
            const businessId = props.match.url[12] + props.match.url[13]
            const business = businesses.businesses.find(business => business.id === businessId )        
            const product = business.attributes.products.filter(product => product.id === parseInt(props.match.params.id) )[0]
            return <ProductEdit business={business} product={product} {...props} />
           }
          } /> 

          <Route exact path='/products/:id/colors/new' render={props => {
            const product = products.products.find(product => product.id === props.match.params.id)
            return <ProductColorNew product={product} {...props} />
           }
          }/>
          
          
          {/* <Route exact path ='/products/:id/colors/:id/edit' component={ProductColorEdit} /> */}

          <Route exact path='/products/:id/colors/:id/edit' render={props => {
            const color = colors.colors.find(color => color.id === parseInt(props.match.params.id))
            const productId = props.match.url[10] + props.match.url[11]
            const product = products.products.find(product => product.id === productId)
            return <ProductColorEdit color={color} productId={product} {...props} />
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
    colors: state.colorReducer,
  };    
}
 
export default connect(mapStateToProps, { getCurrentUser } )(App);

