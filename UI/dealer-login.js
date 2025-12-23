document.getElementById("dealerLoginForm").addEventListener("submit", async e => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/dealers/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email.value, password: password.value })
  });

  const result = await res.json();

  if (res.ok) {
    localStorage.setItem("dealer", JSON.stringify(result.dealer));
    location.href = "dealer-dashboard.html";
  } else alert(result.message);
});
