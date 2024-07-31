// General API request handler
export const apiRequest = async (endpoint: string, method = 'GET') => {

    try {
      const res = await fetch(`https://trello-clone-backend-mu.vercel.app/api/v1${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        }
      });
  
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
  
      return res.json();
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  };
  
  export const postRequest = async (endpoint: string, email: string, password: string) => {
    try {
      const res = await fetch(`https://trello-clone-backend-mu.vercel.app/api/v1${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ email, password }) 
      });
  
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
  
      return res.json();
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  };
  
  export const postUpRequest = async (endpoint: string, username: string, email: string, password: string) => {
    console.log(username, email, password, endpoint);
    try {
      const res = await fetch(`https://trello-clone-backend-mu.vercel.app/api/v1${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ username, email, password }) 
      });
  
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
  
      return res.json();
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  };

  export const addTaskRequest = async (endpoint: string, title: string, description: string, priority: string, date: string, status : string) => {
    try {
      const res = await fetch(`https://trello-clone-backend-mu.vercel.app/api/v1${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}` 
        },
        body: JSON.stringify({ title, description, priority, date, status }) 
      });
  
      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.statusText}`);
      }
  
      return res.json();
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  }
  