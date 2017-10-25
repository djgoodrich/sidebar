const sidebarBtn = document.querySelector('#sidebar-btn');
const sidebar = document.querySelector('#sidebar');
function AddClass() {
	sidebar.classList.toggle('visible');
}

sidebarBtn.addEventListener('click', AddClass);