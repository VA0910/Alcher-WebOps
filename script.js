document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle');
    const sidebar = document.querySelector('.bar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        dropdown.querySelector('.list2').classList.toggle('hide');
      });
    });

    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then(data => {
            const userTableContent = document.getElementById('user-table');
            data.users.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.firstName} ${user.lastName}</td>
                    <td>${user.username}</td>
                    <td>${user.email}</td>
                    <td>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </td>
                `;
                userTableContent.appendChild(row);
            });
        });

    document.getElementById('user-table').addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-btn')) {
            alert('Edit button clicked');
        } else if (event.target.classList.contains('delete-btn')) {
            event.target.closest('tr').remove();
        }
    });
});