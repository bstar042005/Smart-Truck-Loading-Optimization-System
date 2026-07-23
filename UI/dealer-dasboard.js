const form = document.getElementById("truckForm");

async function loadTrucks() {

    const res = await fetch("http://localhost:5000/api/trucks");

    const trucks = await res.json();

    const tbody = document.querySelector("#truckTable tbody");

    tbody.innerHTML = "";

    trucks.forEach(truck => {

        tbody.innerHTML += `
        <tr>
            <td>${truck.truckId}</td>
            <td>${truck.type}</td>
            <td>${truck.capacity}</td>
            <td>${truck.route}</td>
            <td>${truck.available ? "Available" : "Busy"}</td>
            <td>
                <button onclick="deleteTruck('${truck._id}')">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const dealer = JSON.parse(localStorage.getItem("dealer"));

    await fetch("http://localhost:5000/api/trucks/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            dealerId: dealer._id,

            truckId: truckId.value,

            type: type.value,

            capacity: capacity.value,

            route: route.value,

            available: true

        })

    });

    form.reset();

    loadTrucks();

});

async function deleteTruck(id){

    await fetch(`http://localhost:5000/api/trucks/${id}`,{

        method:"DELETE"

    });

    loadTrucks();

}

loadTrucks();