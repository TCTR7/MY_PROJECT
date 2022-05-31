import React from 'react';
import { Link } from 'react-router-dom'

class User extends React.Component {
   render() {
      return (
         <div>
            <h1>User</h1>
            <p><Link to="/about">Click here</Link> to view about</p>
         </div>
      )
   }
}
export default User;