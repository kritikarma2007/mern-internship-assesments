const container = document.getElementById("container");

fetch("https://dummyjson.com/users")
.then(res => res.json())
.then(data => {

    data.users.forEach(user => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        
        <img src="${user.image}" alt="${user.firstName}">

        <table>
            <tr>
                <td class="label">Name</td>
                <td>${user.firstName} ${user.lastName}</td>
            </tr>

            <tr>
                <td class="label">Age</td>
                <td>${user.age}</td>
            </tr>

            <tr>
                <td class="label">Email</td>
                <td>${user.email}</td>
            </tr>

            <tr>
                <td class="label">Phone</td>
                <td>${user.phone}</td>
            </tr>

            <tr>
                <td class="label">Company</td>
                <td>${user.company.name}</td>
            </tr>
        </table>

        <div class="btns">
            <button>View</button>
            <button>Contact</button>
        </div>
        `;

        container.appendChild(card);

    });

});