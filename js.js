

async function post(e) {
  e.preventDefault();
try {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json));


} catch (error) {
  console.error('Error:', error)
}
}
  

const btn = window.document.getElementById('btn')
btn.addEventListener('click', post);


