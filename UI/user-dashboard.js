document.getElementById("shipmentForm").addEventListener("submit", async e => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  const res = await fetch("http://localhost:5000/api/shipments/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user._id,
      weight: weight.value,
      volume: volume.value,
      boxes: boxes.value,
      destination: destination.value,
      deadline: deadline.value
    })
  });

  const result = await res.json();
  alert(result.message);
});
