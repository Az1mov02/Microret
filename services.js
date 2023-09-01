const closeDraw = document.querySelectorAll('.closeDraw')

const navLink = document.querySelectorAll('.down')
const dropDown = document.querySelectorAll('.dropdown-content')


navLink.forEach((b) =>
	b.addEventListener('click', function () {
		// dropDown.classList.toggle('downActive')
		if (dropDown.style.display === 'none') {
			dropDown.style.display = 'block'
		} else {
			dropDown.style.display = 'none'
		}
	})
)
closeDraw.forEach((e) =>
	e.addEventListener('click', function () {
		dropDown.forEach((e) => 
		e.style.display = 'none'
		
		)
	})
)