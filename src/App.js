import React, { Component } from "react";
import CardList from "./components/Cardlist";
import Search from "./components/search/Search";
import Header from "./components/header/Header";
import Scroll from "./components/Scroll";
import Footer from "./components/footer/Footer";
import './app.css';
class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            roboti:[],
            polje:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(noice=>this.setState({roboti:noice}))
    }

    promjeniPolje= params =>{
        this.setState({polje:params.target.value});
    }

   render(){
       const filtriraniRoboti = this.state.roboti.filter(roboti=>{
           return roboti.name.toLocaleLowerCase().includes(this.state.polje.toLocaleLowerCase());
       })
       if(this.state.roboti.length<9){
           return <h1 className="ucitavanje">Loading</h1>
       }else{
        return (
            <div>
                <Header />
                <Search promjenaVrijednostiPolja={this.promjeniPolje}/>
                <Scroll >
                <CardList robots={filtriraniRoboti}/>
                </Scroll>
               <Footer/>
            </div>
        )
       }
    }
}

export default App;
