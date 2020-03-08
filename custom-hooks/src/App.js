import React, { Component } from 'react';
import './App.css';
// import DocTitleOne from './components/DocTitleOne';
// import DocTitleTwo from './components/DocTitleTwo';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
import UserForm from './components/UserForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
        {/* <CounterOne/>
        <CounterTwo/> */}
			{/* <DocTitleOne /> */}
			{/* <DocTitleTwo /> */}
      </div>
    );
  }
}

export default App;
