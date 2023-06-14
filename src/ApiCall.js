import React from "react";
import axios from "axios"; 
import "./css/ApiCall.css";
import Loader from "./Loader";




class ApiCall extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      products:[],
      load:'loading'
    }
  }


  componentDidMount(){
    axios.get("https://fakestoreapi.com/products")

    .then(response=>{
      this.setState({
        load:"notloading",
        products:response.data
        })
    })    
  }
  


  render(){
    return(
      this.state.load==="loading"?<Loader/>:
        <div className="outer-container" >
          {this.state.products.map((itm,k)=>{
            return(
              <div className="inner-container">
                <div className="image-container">
                  <img src={itm.image} alt="img"  />
                </div>
                <div className="details-container">
                  <div className="title-container">
                    <h6>{itm.title}</h6>
                  </div>
                  <div className="price-container">
                    <i class="dollar sign icon"></i>
                    <h6>{itm.price}</h6>
                  </div>  
                  <div className="rating-container">
                    <div><i  class="star icon"></i></div>
                    <div><h6>{itm.rating.rate}</h6></div>
                  </div>
                  <div className="Desc-container" >
                    <p>
                      <span>Description:</span>
                      {itm.description}
                    </p>
                  </div>
                  <div className="button-container">
                    <div class="ui buttons">
                      <button class="ui red button" >Add to Cart</button>
                      <div class="or"></div>
                      <button class="ui positive button">Buy</button>
                    </div>
                  </div>  
                </div>
              </div>
            )
          })};  
        </div>
    )
  }
}
export default ApiCall;