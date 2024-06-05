
// document.addEventListener('DOMContentLoaded', () => {
//     const sections = document.querySelectorAll('.section'); // Corrected selector
//     const navItems = document.querySelectorAll('.navbar a');
    
//     const options = {
//     threshold: 0.40
//     };
    
//     let observer = new IntersectionObserver(navCheck, options);
    
//     sections.forEach(section => {
//     observer.observe(section);
//     });
    
//     function navCheck(entries) {
//     entries.forEach(entry => {
//       const id = entry.target.getAttribute('id');
//       const navItem = document.querySelector(`.navbar a[href="#${id}"]`);
//       if (entry.isIntersecting) {
//           console.log(`Section ${id} is intersecting`);
//           navItems.forEach(item => {
//               item.classList.remove('active');
//           });
//           navItem.classList.add('active');
    
//       }
//     });
//     }
//     });




    
// header elements change color on scroll

document.addEventListener("DOMContentLoaded", function () {
	const sections = document.querySelectorAll(".section");
	const navLinks = document.querySelectorAll(".navbar a");

	function updateActiveLink() {
		let closestSection = null;
		let minDistance = Number.MAX_VALUE;
		const viewportCenter = window.innerHeight / 2;

		sections.forEach((section) => {
			const rect = section.getBoundingClientRect();
			const sectionCenter = rect.top + rect.height / 2;
			const distance = Math.abs(viewportCenter - sectionCenter);

			if (distance < minDistance) {
				minDistance = distance;
				closestSection = section;
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (
				closestSection &&
				link.getAttribute("href") === `#${closestSection.id}`
			) {
				link.classList.add("active");
			}
		});
	}

	updateActiveLink();
	window.addEventListener("hashchange", updateActiveLink);
	window.addEventListener("scroll", updateActiveLink);
});
    