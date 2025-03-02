// import { useState } from 'react';
// import './Login.css';

// function Login({ setShowLoginModal, setShowRegisterModal, handleLogin, loginEmail, setLoginEmail, loginPassword, setLoginPassword }) {
//   return (
//     <div className="modal-overlay">
//       <div className="login-modal">
//         <button className="close-modal" onClick={() => setShowLoginModal(false)}>×</button>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               value={loginEmail} 
//               onChange={(e) => setLoginEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input 
//               type="password" 
//               id="password" 
//               value={loginPassword} 
//               onChange={(e) => setLoginPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p className="register-link">
//           Don't have an account? 
//           <button 
//             onClick={() => {
//               setShowLoginModal(false);
//               setShowRegisterModal(true);
//             }}
//           >
//             Register
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from 'react';
import './Login.css';

function Login({ 
  setShowLoginModal, 
  setShowRegisterModal, 
  handleLogin, 
  loginEmail, 
  setLoginEmail, 
  loginPassword, 
  setLoginPassword 
}) {
  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-modal" onClick={() => setShowLoginModal(false)}>×</button>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={loginEmail} 
              onChange={(e) => setLoginEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={loginPassword} 
              onChange={(e) => setLoginPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="register-link">
          Don't have an account? 
          <button 
            onClick={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;