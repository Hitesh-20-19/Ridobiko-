import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import HomePage from '../homepage/homepage'
import ProductPage from '../productpage/productpage'

export default class mainpage extends Component {

    state={
        data :[{
            city:"Delhi",
            type:"Bike",
            Bike_name:"Activa",
            Rent_Day:"400",
            Deposit:"2000",
            Vehicle_type:"Scooter",
            Img:"https://www.ridobiko.com/sample_images/activa.png",
            id:"1"
        },
        {
            city:"Delhi",
            type:"Bike",
            Bike_name:"FZ",
            Rent_Day:"700",
            Deposit:"2000",
            Vehicle_type:"Bike",
            Img:"https://www.ridobiko.com/sample_images/fz.png",
            id:"2"
        },
        {
            city:"Delhi",
            type:"Car",
            Bike_name:"Wagon R",
            Rent_Day:"1200",
            Deposit:"5000",
            Vehicle_type:"Economy",
            Img:"https://www.ridobiko.com/sample_images/wagon.png",
            id:"3"
        },
        {
            city:"Delhi",
            type:"Car",
            Bike_name:"Swift",
            Rent_Day:"1800",
            Deposit:"2000",
            Vehicle_type:"Sedan",
            Img:"https://www.ridobiko.com/sample_images/swift.png",
            id:"4"
        }
        ],
        inputCity:'',
        inputVehical:'',
        inputType:'',
        SortedData:[]
    }

    handleChange_City=(e)=>{
        this.setState({
          inputCity:e.target.value
        })
        console.log(this.state.inputCity)
      }

    handleChange_Vehical =(e)=>{
        this.setState({
          inputVehical:e.target.value
        })
        console.log(this.state.inputVehical)
      }

    handleChange_Type= (e)=>{
        this.setState({
            inputType:e.target.value
          })
          console.log(this.state.inputType)
          
    }
    
    handleFilter=()=>{
        if(this.state.inputCity==="Delhi" && this.state.inputVehical==="Bike"){
            const filterItems = this.state.data.filter(i=>i.type==="Bike")
            this.setState({
                SortedData: filterItems
            })  
        }

        if(this.state.inputCity==="Delhi"&& this.state.inputVehical==="Car"){
            const filterItems = this.state.data.filter(i=>i.type ==="Car")
            this.setState({
                SortedData: filterItems
            })
        }
        console.log(this.state.SortedData)
    }

    handleFilterType =()=>{
        if(this.state.inputType==="Scooter"){
            const Filters = this.state.data.filter(i=>i.Vehicle_type==="Scooter")
            this.setState({
                SortedData:Filters
            })
        }

        if(this.state.inputType==="Bike"){
            const Filters = this.state.data.filter(i=>i.Vehicle_type==="Bike")
            this.setState({
                SortedData:Filters
            })
        }

        if(this.state.inputType==="Economy"){
            const Filters = this.state.data.filter(i=>i.Vehicle_type==="Economy")
            this.setState({
                SortedData:Filters
            })
        }

        if(this.state.inputType==="Sedan"){
            const Filters = this.state.data.filter(i=>i.Vehicle_type==="Sedan")
            this.setState({
                SortedData:Filters
            })
        }



    }


    render() {
        
        return (
                <div>
                <Route path="/" exact component={()=><HomePage handleFilter={this.handleFilter} valuec={this.state.inputCity} valuev={this.state.inputVehical}
                handleCity={this.handleChange_City} handleVehical={this.handleChange_Vehical}/>} />
                <Route path='/products' component={()=><ProductPage cardData={this.state.SortedData} handletype={this.handleChange_Type} value={this.state.inputType}
                handleFilterType = {this.handleFilterType}
                />}/>
                </div>
        )
    }
}
