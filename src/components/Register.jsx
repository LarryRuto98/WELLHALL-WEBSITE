// import './Register.css';

// function Register({ setShowRegisterModal, setShowLoginModal, handleRegister, registerName, setRegisterName, registerEmail, setRegisterEmail, registerPassword, setRegisterPassword }) {
//   return (
//     <div className="modal-overlay">
//       <div className="register-modal">
//         <button className="close-modal" onClick={() => setShowRegisterModal(false)}>×</button>
//         <h2>Create Account</h2>
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor="register-name">Full Name</label>
//             <input 
//               type="text" 
//               id="register-name" 
//               value={registerName} 
//               onChange={(e) => setRegisterName(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-email">Email</label>
//             <input 
//               type="email" 
//               id="register-email" 
//               value={registerEmail} 
//               onChange={(e) => setRegisterEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-password">Password</label>
//             <input 
//               type="password" 
//               id="register-password" 
//               value={registerPassword} 
//               onChange={(e) => setRegisterPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="register-button">Register</button>
//         </form>
//         <p className="login-link">
//           Already have an account? 
//           <button 
//             onClick={() => {
//               setShowRegisterModal(false);
//               setShowLoginModal(true);
//             }}
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
// import './Register.css';

// function Register({ 
//   setShowRegisterModal, 
//   setShowLoginModal, 
//   handleRegister, 
//   registerName, 
//   setRegisterName, 
//   registerEmail, 
//   setRegisterEmail, 
//   registerPassword, 
//   setRegisterPassword 
// }) {
//   return (
//     <div className="modal-overlay">
//       <div className="register-modal">
//         <button className="close-modal" onClick={() => setShowRegisterModal(false)}>×</button>
//         <h2>Create Account</h2>
//         <form onSubmit={handleRegister}>
//           <div className="form-group">
//             <label htmlFor="register-name">Full Name</label>
//             <input 
//               type="text" 
//               id="register-name" 
//               value={registerName} 
//               onChange={(e) => setRegisterName(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-email">Email</label>
//             <input 
//               type="email" 
//               id="register-email" 
//               value={registerEmail} 
//               onChange={(e) => setRegisterEmail(e.target.value)} 
//               required 
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="register-password">Password</label>
//             <input 
//               type="password" 
//               id="register-password" 
//               value={registerPassword} 
//               onChange={(e) => setRegisterPassword(e.target.value)} 
//               required 
//             />
//           </div>
//           <button type="submit" className="register-button">Register</button>
//         </form>
//         <p className="login-link">
//           Already have an account? 
//           <button 
//             onClick={() => {
//               setShowRegisterModal(false);
//               setShowLoginModal(true);
//             }}
//           >
//             Login
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
import './Register.css';

function Register({
  setShowRegisterModal,
  handleRegister,
  registerName,
  setRegisterName,
  registerEmail,
  setRegisterEmail,
  registerPassword,
  setRegisterPassword
}) {
  return (
    <div className="modal-overlay">
      <div className="register-modal">
        <button className="close-modal" onClick={() => setShowRegisterModal(false)}>×</button>
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="register-name">Full Name</label>
            <input 
              type="text" 
              id="register-name" 
              value={registerName} 
              onChange={(e) => setRegisterName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input 
              type="email" 
              id="register-email" 
              value={registerEmail} 
              onChange={(e) => setRegisterEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input 
              type="password" 
              id="register-password" 
              value={registerPassword} 
              onChange={(e) => setRegisterPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        <p className="login-link">
          Already have an account? 
          <button 
            onClick={() => {
              setShowRegisterModal(false);
              setShowLoginModal(true);
            }}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;