const URL = 'http://localhost:3000/api';
const WHALES_URL = `${URL}/whales`;
const OCEANS_URL = `${URL}/oceans`;
export default {
  getWhales() {
    return fetch(WHALES_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json()); 
  },
  getWhaleDetail(id) {
    return fetch(`${WHALES_URL}/${id}`, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json()); 
  },
  addWhale(whale) {
    return fetch('http://localhost:3000/api/whales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(whale)
    })
      .then(response => response.json());
  },
  
  updateWhale(whale) {
    return fetch(`${WHALES_URL}/${whale.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(whale)
    })
      .then(response => response.json());
  },

  removeNeighborhood(id) {
    return fetch(`${WHALES_URL}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json());
  },

  getQuadrants() {
    return fetch(OCEANS_URL, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  }
};