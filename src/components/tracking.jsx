import React, { Component } from 'react';
import axios from 'axios';
class Tracking extends Component {
    constructor(props) {
      super(props);
      this.state = {
          listData1:[],
          userdata:{},
          invoice_number:0,
          status:'',
      }
      this.state.userdata = JSON.parse(localStorage.getItem("user"));
      console.log(this.state.userdata);
    }
    componentWillMount(){
        axios.get("http://13.58.92.162:3000/orders/"+this.state.userdata.uid).then(response => {
            this.setState({ listData1: response.data });
            this.state.listData1=response.data;
            console.log(this.state.listData1)
          })
      
    }
    track() {
        console.log(this.state.invoice_number)
        for(var i=0;i<this.state.listData1.length;i++) {
            if(this.state.invoice_number === this.state.listData1[i].invoice_number) {
                this.setState({status:this.state.listData1[i].order_status});
                this.state.status=this.state.listData1[i].order_status;
                //console.log(this.state.status);
            } else {
                    console.log("no match");
            }
        }
        console.log(this.state.status);
    }
    render(){
        return(
            <div>
                                <div className="page-head_agile_info_w3l" >
                    <div className="container" >
                        <h3>Tracking <span>Page </span></h3>

                        <div className="services-breadcrumb">
                            <div className="agile_inner_breadcrumb">

                                <ul className="w3_short">
                                    <li><a href="/">Home</a><i>|</i></li>
                                    <li>Tracking Page </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

               
               {/* {this.state.listData1.map(a=>
        <p>{a.brand_name}</p>
                )} */}
             <br/>   <input type="text" onChange={event=> this.setState({invoice_number:event.target.value})} />
                {/* {console.log(this.state.invoice_number)} */}
                <button className="btn btn-outline-info btn-xs" onClick={() => this.track()}> Track </button>
                {this.state.status?( <div>
               <h1>your Order is:</h1>   <h4>{this.state.status}</h4></div>
                ):
                []}
            </div>
        )
    }
}
export default Tracking;