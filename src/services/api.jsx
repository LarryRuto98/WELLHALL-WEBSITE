const API_BASE_URL = 'http://localhost:5000'; // Replace with your backend URL

/**
 * Helper function to handle API requests.
 * @param {string} endpoint - The API endpoint.
 * @param {string} method - The HTTP method (e.g., 'GET', 'POST').
 * @param {Object} body - The request body (if any).
 * @param {boolean} requiresAuth - Whether the request requires authentication.
 * @returns {Promise<Object>} - The response data.
 */
const fetchApi = async (endpoint, method = 'GET', body = null, requiresAuth = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth) {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No authentication token found. Please log in.');
    }
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

/**
 * Logs in a user with the provided email and password.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - The response data containing the access token and user details.
 */
export const loginUser = async (email, password) => {
  try {
    const data = await fetchApi('/api/login', 'POST', { email, password });
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data; // { access_token: '...', user: { ... } }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

/**
 * Registers a new user with the provided name, email, and password.
 * @param {string} name - The user's name.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<Object>} - The response data containing the access token and user details.
 */
export const registerUser = async (name, email, password) => {
  try {
    const data = await fetchApi('/api/register', 'POST', { name, email, password });
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data; // { access_token: '...', user: { ... } }
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

/**
 * Fetches the authenticated user's data.
 * @returns {Promise<Object>} - The user's data.
 */
export const fetchUserData = async () => {
  try {
    const data = await fetchApi('/api/user', 'GET', null, true);
    return data; // { user: { ... } }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

/**
 * Refreshes the access token using the refresh token.
 * @returns {Promise<Object>} - The new access token.
 */
export const refreshToken = async () => {
  try {
    const data = await fetchApi('/api/refresh-token', 'POST', null, true);
    localStorage.setItem('token', data.access_token);
    return data; // { access_token: '...' }
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
};

/**
 * Logs out the user by clearing the token and user data from localStorage.
 */
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * Checks if the user is authenticated.
 * @returns {boolean} - True if the user is authenticated, false otherwise.
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

/**
 * Gets the current user from localStorage.
 * @returns {Object|null} - The user object or null if not logged in.
 */
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};