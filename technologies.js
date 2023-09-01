const technoLink1 = document.querySelector('.technoLink1')
const technoLink2 = document.querySelector('.technoLink2')
const technoLink3 = document.querySelector('.technoLink3')
const technoLink4 = document.querySelector('.technoLink4')
const technoLink5 = document.querySelector('.technoLink5')
const technoLinks = document.querySelectorAll('.techno5link')
const techno5box = document.querySelectorAll('.techno5box')
const technoInfo1 = document.querySelector('.technoInfo1')
const technoInfo2 = document.querySelector('.technoInfo2')
const technoInfo3 = document.querySelector('.technoInfo3')
const technoInfo4 = document.querySelector('.technoInfo4')
const technoInfo5 = document.querySelector('.technoInfo5')
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

techno5box.forEach((e) =>
	e.addEventListener('click', function () {
		techno5box.forEach((e) => e.removeAttribute('id'))
		e.setAttribute('id', 'technoActive')
	})
)

technoLink1.addEventListener('click', function () {
	technoInfo1.style.display = 'block'
	technoInfo2.style.display = 'none'
	technoInfo3.style.display = 'none'
	technoInfo4.style.display = 'none'
	technoInfo5.style.display = 'none'
})
technoLink2.addEventListener('click', function () {
	technoInfo1.style.display = 'none'
	technoInfo2.style.display = 'block'
	technoInfo3.style.display = 'none'
	technoInfo4.style.display = 'none'
	technoInfo5.style.display = 'none'
})
technoLink3.addEventListener('click', function () {
	technoInfo1.style.display = 'none'
	technoInfo2.style.display = 'none'
	technoInfo3.style.display = 'block'
	technoInfo4.style.display = 'none'
	technoInfo5.style.display = 'none'
})

technoLink4.addEventListener('click', function () {
	technoInfo1.style.display = 'none'
	technoInfo2.style.display = 'none'
	technoInfo3.style.display = 'none'
	technoInfo4.style.display = 'block'
	technoInfo5.style.display = 'none'
})
technoLink5.addEventListener('click', function () {
	technoInfo1.style.display = 'none'
	technoInfo2.style.display = 'none'
	technoInfo3.style.display = 'none'
	technoInfo4.style.display = 'none'
	technoInfo5.style.display = 'block'
})
