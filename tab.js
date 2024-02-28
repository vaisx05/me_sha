document.addEventListener("DOMContentLoaded", function () {
        // Get tab links and tab content
        const tabLinks = document.querySelectorAll(".tab_header ul li a");
        const tabContents = document.querySelectorAll(".tab_content .tab_item");

        // Add click event listeners to tab links
        tabLinks.forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();

                // Remove the 'active' class from all tab links and tab content
                tabLinks.forEach(function (link) {
                    link.parentElement.classList.remove("active");
                });

                tabContents.forEach(function (tab) {
                    tab.classList.remove("active");
                });

                // Add the 'active' class to the clicked tab link and corresponding tab content
                const targetTabId = link.getAttribute("href").substring(1);
                const targetTab = document.getElementById(targetTabId);

                link.parentElement.classList.add("active");
                targetTab.classList.add("active");
            });
        });
    });

