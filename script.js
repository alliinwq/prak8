// 1 Зміна стилів сторінки

let styleButton = document.getElementById("style-button");

styleButton.addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    console.log("Стиль сторінки змінено");
});


// 2 Обробка події натискання

let messageButton = document.getElementById("message-button");

messageButton.addEventListener("click", function() {
    document.getElementById("message").textContent =
        "Дякуємо, що обрали AUTO DRIVE!";

    console.log("Кнопку повідомлення натиснуто");
});


// 3 Динамічне створення послуг

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", function() {
    let serviceName = document.getElementById("service-name").value;

    if (serviceName.trim() === "") {
        alert("Введіть назву послуги!");
        return;
    }

    let newService = document.createElement("div");

    newService.className = "service-card";

    newService.innerHTML = `
        <div class="service-icon">🔧</div>
        <h3>${serviceName}</h3>
        <p>Нова послуга автосервісу AUTO DRIVE.</p>
    `;

    document.querySelector(".services-grid").appendChild(newService);

    document.getElementById("service-name").value = "";

    console.log("Додано нову послугу:", serviceName);
});