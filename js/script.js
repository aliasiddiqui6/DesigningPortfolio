// Wait for the HTML to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
  
  const filterButtons = document.querySelectorAll(".filter-btn");
  const posterCards = document.querySelectorAll(".poster-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      
      // 1. Remove 'active' class from all buttons, add to the clicked one
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // 2. Get the filter value (e.g., "awards", "oncology", "all")
      const filterValue = button.getAttribute("data-filter");

      // 3. Loop through all posters to show/hide them
      posterCards.forEach(card => {
        const cardCategories = card.getAttribute("data-category");

        // If the filter is 'all' OR the card's categories include the filter value
        if (filterValue === "all" || cardCategories.includes(filterValue)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });
});