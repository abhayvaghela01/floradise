document.addEventListener('DOMContentLoaded', function() {
    // Cache the navbar links and sections
    const navbarLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('.section');

    // Function to handle scroll event
    function onScroll() {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all navbar links
                navbarLinks.forEach(link => link.classList.remove('active'));

                // Add active class to the current section's navbar link
                navbarLinks[index].classList.add('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Initial call to set the correct link based on initial scroll position
    onScroll();
});
