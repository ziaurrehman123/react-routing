import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Error from './Error'
const App =()=>{
  const Name =()=>{
    return (
      <h1>Hello I am name page</h1>
    )
  };
  return (
   <>
   <Switch>
     <Route exact path="/" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Route path="/contact/name" component={Name}/>
     <Route component={Error}/>
   </Switch>
   {/* <About />
   <Contact /> */}
   </>
  )
}

export default App;
