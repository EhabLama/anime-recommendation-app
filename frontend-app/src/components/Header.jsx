import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webLogo from '../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserProfile, signup, login, signout } from '../api';
import Modal from 'react-bootstrap/Modal';
import '../styles/Header.css';

function AppNavbar() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [formType, setFormType] = useState('');
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const navigate = useNavigate();

  const handleIconClick = () => {
    setShowPopup(!showPopup);
    if (isLoggedIn && !userProfile) {
      const token = localStorage.getItem('token');
      fetchUserProfile(token)
        .then((profile) => setUserProfile(profile))
        .catch((error) => console.error('Failed to fetch user profile:', error));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formType === 'login') {
        const data = await login(formData.email, formData.password);
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        setUserProfile(data.user);
        setModalMessage('Login successful!');
      } else if (formType === 'signup') {
        await signup(formData.name, formData.email, formData.password);
        setFormType('login');
        setModalMessage('Signup successful! Please log in.');
      }
      setShowPopup(false);
    } catch (error) {
      console.error('Error during form submission:', error);
      setModalMessage(`Error: ${error.message}`);
    } finally {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000); // Hide modal after 2 seconds
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignout = () => {
    signout();
    setIsLoggedIn(false);
    setUserProfile(null);
    setModalMessage('You have been signed out.');
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000); // Hide modal after 2 seconds
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header>
      <Navbar expand="lg" className="app-navbar fs-5">
        <Container>
          <a href="/" className="me-5 navbar-brand lo">
            <img className="webLogo" alt="" src={webLogo}></img>
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-lg-3">
              <Link to="/" className="nav-link">
                <span className="logo">H</span>ome
              </Link>
              <Link to="/merch" className="nav-link">
                <span className="logo">M</span>erch
              </Link>
              <Link to="/anime" className="nav-link">
                <span className="logo">A</span>nime
              </Link>
              <Link to="/manga" className="nav-link">
                <span className="logo">M</span>anga
              </Link>
              <Link to="/community" className="nav-link">
                <span className="logo">C</span>ommunity
              </Link>
            </Nav>
            <div className="d-flex align-items-center mt-2 justify-content-between">
              <div className="searchIcon" onClick={handleIconClick}>
                <i className="fa-regular fa-circle-user ms-3 fs-2 curs-p nav-user"></i>
              </div>
              {showPopup && (
                <div className="user-popup">
                  {isLoggedIn ? (
                    <div>
                      <p>Welcome, {userProfile?.name || 'User'}!</p>
                      <p>Email: {userProfile?.email}</p>
                      <button onClick={handleSignout}  className="auth-button">Sign Out</button>
                    </div>
                  ) : formType === 'login' ? (
                    <div>
                      <h2>Login</h2>
                      <form onSubmit={handleFormSubmit}>
                        <div>
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <button type="submit">Login</button>
                      </form>
                      <p>
                        Don't have an account? <a href="#" onClick={() => setFormType('signup')}>Sign up</a>
                      </p>
                    </div>
                  ) : formType === 'signup' ? (
                    <div>
                      <h2>Sign Up</h2>
                      <form onSubmit={handleFormSubmit}>
                        <div>
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <button type="submit">Sign Up</button>
                      </form>
                      <p>
                        Already have an account? <a href="#" onClick={() => setFormType('login')}>Login</a>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>You are not logged in.</p>
                      <p>
                        Please <a href="#" onClick={() => setFormType('login')}>login</a> or <a href="#" onClick={() => setFormType('signup')}>sign up</a>.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showModal} onHide={() => setShowModal(false)} className="custom-modal">
        <Modal.Body className="modal-body">
          {modalMessage}
        </Modal.Body>
      </Modal>
    </header>
  );
}

export default AppNavbar;
