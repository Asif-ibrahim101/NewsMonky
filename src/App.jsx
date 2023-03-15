import React, {Component} from 'react';
import Header from './Components/Header';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import './App.css';

export default class App extends Component {

  pageSize = 15;

  state = {
    progress: 0
  }

  setProgress = (progress)=> {
    this.setState({progress: progress})
  }

  render(){
    return (
      <>
        <LoadingBar
          color='#f11946'
          height={3}
          transitionTime= {500}
          loaderSpeed= {2000}
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Header/>
        <Routes>
          {/* <News pageSize={this.pageSize} country='us' category='sports' /> */}
          <Route exact path="/">
            <Route exact path='/' element={<News setProgress = {this.setProgress} key='general' pageSize={this.pageSize} country='us' category='General' />} />
            <Route exact path='/business' element={<News setProgress = {this.setProgress} key='business' pageSize={this.pageSize} country='us' category='Business' />} />
            <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} key='entertainment' pageSize={this.pageSize} country='us' category='Entertainment' />} />
            <Route exact path='/health' element={<News setProgress = {this.setProgress} key='health' pageSize={this.pageSize} country='us' category='Health' />} />
            <Route exact path='/science' element={<News setProgress = {this.setProgress} key='science' pageSize={this.pageSize} country='us' category='Science' />} />
            <Route exact path='/sports' element={<News setProgress = {this.setProgress} key='sports' pageSize={this.pageSize} country='us' category='Sports' />} />
            <Route exact path='/technology' element={<News setProgress = {this.setProgress} key='technology' pageSize={this.pageSize} country='us' category='Technology' />} />
          </Route>
        </Routes>
      </>
      )}
}