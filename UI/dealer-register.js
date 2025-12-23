document.getElementById("dealerRegisterForm").addEventListener("submit", async e => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/dealers/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      companyName: companyName.value,
      email: email.value,
      mobile: mobile.value,
      password: password.value
    })
  });

  const result = await res.json();
  alert(result.message);
});
