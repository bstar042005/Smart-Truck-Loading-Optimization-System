document.getElementById("loginForm").addEventListener("submit", async e => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  });

  const result = await res.json();

  if (res.ok) {
    localStorage.setItem("user", JSON.stringify(result.user));
    location.href = "user-dashboard.html";
  } else {
    alert(result.message);
  }
});
