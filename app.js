// Navigation function
function navigateTo(page) {
    window.location.href = page;
}

// Show options modal
function showOptions(food) {
    document.getElementById("selected-food").textContent = food;
    document.getElementById("options-modal").classList.remove("hidden");
}

// Close options modal
function closeModal() {
    document.getElementById("options-modal").classList.add("hidden");
}

// Submit options and navigate to the order page
function submitOptions() {
    const selectedFood = document.getElementById("selected-food").textContent;
    const size = document.getElementById("size").value;
    const extras = Array.from(
        document.querySelectorAll("#food-options input[type='checkbox']:checked")
    ).map((checkbox) => checkbox.value);

    const extrasQuery = extras.length > 0 ? `&extras=${extras.join(",")}` : "";
    const query = `?item=${selectedFood}&size=${size}${extrasQuery}`;
    navigateTo(`order.html${query}`);
}

// Automatically fill selected food and options in the order form
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const food = params.get("item");
    const size = params.get("size");
    const extras = params.get("extras");

    if (food) {
        document.getElementById("food").value = `${food} (${size})`;
        if (extras) {
            const extrasField = document.createElement("p");
            extrasField.textContent = `Extras: ${extras}`;
            document.getElementById("orderForm").appendChild(extrasField);
        }
    }
});
