export const setToken = (token, isAdmin = false) => {
    const key = isAdmin ? 'adminToken' : 'userToken';
    localStorage.setItem(key, token);
  };
  
  export const getToken = (isAdmin = false) => {
    const key = isAdmin ? 'adminToken' : 'userToken';
    return localStorage.getItem(key);
  };
  
  export const clearToken = (isAdmin = false) => {
    const key = isAdmin ? 'adminToken' : 'userToken';
    localStorage.removeItem(key);
  };
  
  export const isAuthenticated = (isAdmin = false) => {
    return !!getToken(isAdmin);
  };
  