document.getElementById("registerForm").addEventListener("submit", async e => {
  e.preventDefault();

  const data = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    password: password.value,
    city: city.value,
    state: state.value,
    country: country.value
  };

  const res = await fetch("http://localhost:5000/api/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await res.json();
  alert(result.message);
});
