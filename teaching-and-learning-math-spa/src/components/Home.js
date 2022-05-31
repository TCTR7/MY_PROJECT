import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
   render() {
      return (
         <div>
            <p>Welcome to the React tutorial</p>
            <p><Link to="/about">Click here</Link> to view about</p>
            <p><Link to="/user">Click here</Link> to view user</p>
         </div>
      )
   }
}
export default Home;