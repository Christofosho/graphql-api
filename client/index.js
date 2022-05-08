fetch("http://localhost:3000", {
  method: "POST",
  headers: { 'Content-Type': "application/json" },
  body: JSON.stringify({
    query: "{ area { id, name, machines { id, name } } }",
  }),
})
.then(res => res.json())
.then(res => {
  console.log(res);
  document.querySelector(".main").innerHTML = JSON.stringify(res.data);
})
.catch(err => console.error(err));