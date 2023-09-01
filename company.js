const closeDraw = document.querySelectorAll('.closeDraw')
const dropDown = document.querySelectorAll('.dropdown-content')
const navLink = document.querySelectorAll('.down')


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

$(document).ready(function (){
	$('.slider').slick()

})
