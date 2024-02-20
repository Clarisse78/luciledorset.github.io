
const URI_1 = "https://reqres.in/api/users";
const URI_2 = "https://reqres.in/api/users/2";
const_URI_3 = "https://jsonplaceholder.typicode.com/users";
const_URI_4 = "https://pokeapi.co/api/v2/eevee";

console.log(fetch(URI_1));



async function createUser() {
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'User 1'
        })
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }
  
  createUser();