document.getElementById("truckForm").addEventListener("submit", async e => {
  e.preventDefault();
  const dealer = JSON.parse(localStorage.getItem("dealer"));

  const res = await fetch("http://localhost:5000/api/trucks/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      dealerId: dealer._id,
      truckId: truckId.value,
      type: type.value,
      capacity: capacity.value,
      route: route.value,
      available: true
    })
  });

  const result = await res.json();
  alert(result.message);
});
