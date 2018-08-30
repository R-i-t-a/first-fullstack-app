export default {
  getWhales() {
    return fetch('http://localhost:3000/api/whales', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json()); 
  },
  getWhaleDetail(id) {
    return fetch(`http://localhost:3000/api/whales/${id}`, {
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
  }
};