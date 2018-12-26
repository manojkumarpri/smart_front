import React, { Component } from 'react';
import './cart.css'
import StarRatingComponent from 'react-star-rating-component';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      combine1: [],
      combine: [],
      listData1:[],
      listData:[],
      rating: 5,
      check:[],
      check1:[],
    }
    // this.get=this.get.bind(this);
    this.state.combine = JSON.parse(localStorage.getItem("final"));
    console.log(this.state.combine);
    // this.setState({combine:this.state.combine})
    this.state.check1=JSON.parse(localStorage.getItem("check"));
    if(this.state.check1!=null){
      this.state.check=this.state.check1;
    }
    else{
      this.state.check=[];
    }

    
  }

  
  Remove(id) {
    // localStorage.setItem("final");
    for(var i=0;i<this.state.combine.length;i++){
      if(this.state.combine[i].prodId==id){
        this.state.combine.splice(i, 1);
      }
    }
    localStorage.setItem("final", JSON.stringify(this.state.combine));

    window.location.reload();
    this.props.history.push("/cart");
  }
  Reload(){
    window.location.reload();
  }
  checkout(a){
    console.log(a)
    this.state.check.push(a);
    localStorage.setItem("check", JSON.stringify(this.state.check));
    for(var i=0;i<this.state.combine.length;i++){
      if(this.state.combine[i].prodId==a.prodId){
        this.state.combine.splice(i, 1);
      }
    }
    console.log(this.state.combine)
    localStorage.setItem("final", JSON.stringify(this.state.combine));
    window.location.reload();
    this.props.history.push("/cart");


   // this.props.history.push("/checkout");

  }
  checkout1(){
    this.props.history.push("/checkout");
  }
  
  // onStarClick(nextValue, prevValue, name) {
  //   this.setState({rating: nextValue});
  //  }



  //    this.setState({combine1:localStorage.getItem("manoj")});

  render() {
    
    const { rating } = this.state;

    
    
    console.log((this.state.combine));
    if (this.state.combine == []) {
      console.log('alling get');
    }
    return (
      <div>
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>Cart <span>Page  </span></h3>

            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">

                <ul className="w3_short">
                  <li><a href="/product">Home</a><i>|</i></li>
                  <li>Cart Page</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <br/>
        <div className="container table-responsive">
        <hr/>
        {this.state.combine!=undefined ? (this.state.combine.map(a =>
        
        
          <table id="cart" className="card mb-2 table-responsive">
            <thead>
              <tr>
                <th style={{ width: "50%" }}>Product</th>
                <th style={{ width: "10%" }}>Price</th>
                <th style={{ width: "8%"  }}>Quantity</th>
                <th style={{ width: "22%" }} className="text-center">Subtotal</th>
                <th style={{ width: "10%" }}></th>
              </tr>
            </thead>
           
            <tbody>
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2  hidden-xs">
                    <img src={a.img} alt="..." className="img-responsive" />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">{a.name}</h4>
                        <StarRatingComponent
                          name="rate2"
                          editing={false}
                          renderStarIcon={() => <span><i class="fa fa-star" aria-hidden="true"></i></span>}
                          starCount={5}
                          value={a.rating}
                        />
                      <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price"> Rs.{a.price}</td>
                <td data-th="Quantity">
                  {/* <input type="number" className="form-control text-center" value={a.quantity} /> */}
                  <p>{a.quantity}</p>
                </td>
                <td data-th="Subtotal" className="text-center"> Rs.{a.price * a.quantity}</td>
                <td className="actions" data-th="">
                  <button className="btn btn-info btn-sm" onClick={()=>this.Reload()}><i className="fa fa-refresh"></i></button>&nbsp;
                  <button className="btn btn-danger btn-sm" onClick={() => this.Remove(a.prodId)}><i className="fa fa-trash"></i></button>
                </td>
              </tr>
            </tbody>
           
            <tfoot>
              <tr className="visible-xs">
                <td className="text-center"><strong>Total Rs.{a.price * a.quantity}</strong></td>
              </tr>
              <tr>
                <td><a href="/product" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                <td colSpan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center"><strong>Total Rs.{a.price * a.quantity}</strong></td>
                <td><button  className="btn btn-info" onClick={()=>this.checkout(a)}>add to checkout</button></td>
              </tr>
            </tfoot>
          </table>
      ) ):(
        alert("Cart is Empty", this.props.history.push("/")) 
    )}
        
        </div>
        <button className="btn btn-success" onClick={()=>this.checkout1()}>Go to checkout</button>
        {/* {this.state.combine != undefined ? (
          <div> */}
        {/* <h1>YOUR CART DETAILS BELOW:</h1>
              
              
                  <table className="table table-bordered">
                          <thead>
                            <tr><th>ID</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>Product category</th>
                              <th>Shop category</th>
                              <th>Short description</th>
                              <th>Long Description</th>
                              <th>Size</th>
                              <th>Ratings</th>
                              <th>Discount</th>
                              <th>Brand name</th>
                              <th>Sku</th>
                              <th>Tax</th>
                              <th>Product id</th>
                              <th>TotalPrice</th>
                            </tr>
                            </thead>
                            <tbody>
                          {this.state.combine!=undefined ? (   this.state.combine.map(a =>
                               <tr > <td>{a.Id1}</td>
                                <td><img src={a.img} className="img-thumbnail"  />
                                </td><td>{a.name}</td>
                                <td>{a.price}</td><td>
                          {a.quantity}</td>
                          <td>{a.prodCategory}</td>
                          <td>{a.shopCategory}</td>
                          <td>{a.shortDesc}</td>
                          <td>{a.longDesc}</td>
                          <td>{a.size}</td>
                          <td>{a.rating}</td>
                          <td>{a.discount}</td>
                          <td>{a.randName}</td>
                          <td>{a.sku}</td>
                          <td>{a.tax}</td>
                          <td>{a.prodId}</td>
                          <td>{a.total}</td>
                          </tr> 
                                ) ):(
                                    alert("please sign in first")
                                )}
                          </tbody></table> */}

        {/*            
            <div className="wrap cf">
              <h1 className="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
              <div className="heading cf">
                <h1>My Cart</h1>
                <a href="/" className="continue">Continue Shopping</a>
              </div>
              <div className="cart">
               
                {this.state.combine.map(a =>
                  <li className="items even">
                    <div className="infoWrap">
                      <div className="cartSection info">
                        <img src={a.product_image} alt="" className="itemImg" style={{width:"35%",height:"30%"}} />
                        
                        <h3>{a.product_name}</h3>
                        <p> <input type="text" className="qty" placeholder={a.quantity} /> x ₹{a.price}</p>
                        <p className="stockStatus"> In Stock</p>
                      </div>
                      <div className="prodTotal cartSection">
                        <p>₹{a.total}</p>
                      </div>
                      <div className="cartSection removeWrap">
                        <a  className="remove" onClick={() => this.Remove(a.id)}>x</a>
                      </div>
                    </div>
                   
                  </li>
                )}
                
              </div>
              
              {this.state.combine.map(a =>
                <div className="subtotal cf">
                  <ul>
                    <li className="totalRow"><span className="label">Subtotal</span><span className="value">₹{a.total}.00</span></li>
                    <li className="totalRow"><span className="label">Shipping</span><span className="value">₹5.00</span></li>
                    <li className="totalRow"><span className="label">GST</span><span className="value">₹4.00</span></li>
                    <li className="totalRow final"><span className="label">Total</span><span className="value">₹{a.total + 5 + 4}.00</span></li>
                    <li className="totalRow"><a href="/product/checkout" className="btn continue">Checkout</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>) : (
            alert("Cart is Empty", this.props.history.push("/"))
           
          )} */}
      </div>
    )
  }
}
export default Cart;