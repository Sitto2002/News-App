import React from 'react';
import './App.css'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export class App extends React.Component {
   pageSize = 5;

   state = {
    progress: 0
   }

   setProgress = (progress) => {
    this.setState({progress: progress})
   }

  render() {

    return (
      <>

<BrowserRouter>
  
     <NavBar/>

     <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
     
     <Routes>
     <Route exact path="/" element = { <News setProgress={this.setProgress} key ="General" pageSize={this.pageSize} country="in" category="General"/>} />
     <Route exact path="/Business" element = { <News setProgress={this.setProgress} key ="Business" pageSize={this.pageSize} country="in" category="Business" />} />
     <Route exact path="/Health" element = { <News setProgress={this.setProgress} key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
     <Route exact path="/Entertainment" element = { <News setProgress={this.setProgress} key ="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
     <Route exact path="/Technology" element = { <News setProgress={this.setProgress} key =" Technology"  pageSize={this.pageSize} country="in" category="Technology" />} />
     <Route exact path="/Sports" element = { <News setProgress={this.setProgress} key ="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
     <Route exact path="/Science" element = { <News setProgress={this.setProgress} key ="Science" pageSize={this.pageSize} country="in" category="Science" />} />
     </Routes>

</BrowserRouter>
      </>
    )
  }
}

export default App
