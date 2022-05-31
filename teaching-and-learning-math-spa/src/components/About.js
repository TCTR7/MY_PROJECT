import React from 'react';
import { Link } from 'react-router-dom'

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About</h1>
            <p><Link to="/user">Click here</Link> to view user</p>
         </div>
      )
   }
}
export default About;