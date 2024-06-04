const LISTING_SERVICE_BASE_URL = 'http://localhost:3001';
const USER_SERVICE_BASE_URL = 'http://localhost:3002';

export const fetchAnimeList = async () => {
  const response = await fetch(`${LISTING_SERVICE_BASE_URL}/listings`);
  if (!response.ok) {
    throw new Error('Failed to fetch anime list');
  }
  return await response.json();
};

export const signup = async (name, email, password) => {
  const response = await fetch(`${USER_SERVICE_BASE_URL}/user/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (!response.ok) {
    throw new Error('Failed to sign up');
  }
  return await response.json();
};

export const login = async (email, password) => {
  const response = await fetch(`${USER_SERVICE_BASE_URL}/user/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error('Failed to log in');
  }
  return await response.json();
};

export const fetchUserProfile = async (token) => {
  const response = await fetch(`${USER_SERVICE_BASE_URL}/user/profile`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }
  return await response.json();
};

export const signout = () => {
    localStorage.removeItem('token');
  };
