// Select all unit headers
document.querySelectorAll('.unit-header').forEach((header) => {
  header.addEventListener('click', () => {
    const resources = header.nextElementSibling; // The .resources section under the clicked header
    const isActive = resources.style.display === 'block';

    // Close all open dropdowns
    document.querySelectorAll('.resources').forEach((res) => (res.style.display = 'none'));

    // Toggle the clicked dropdown
    resources.style.display = isActive ? 'none' : 'block';
  });
});

