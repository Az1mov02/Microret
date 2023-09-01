const indusLink1 = document.querySelector('.indusLink1')
const indusLink2 = document.querySelector('.indusLink2')
const indusLink3 = document.querySelector('.indusLink3')
const indusLink4 = document.querySelector('.indusLink4')
// const techdnoLinks = document.querySelectorAll('.indusLink')
const indusbox = document.querySelectorAll('.indusBox')
const indusInfo1 = document.querySelector('.indusInfo1')
const indusInfo2 = document.querySelector('.indusInfo2')
const indusInfo3 = document.querySelector('.indusInfo3')
const indusInfo4 = document.querySelector('.indusInfo4')
const closeDraw = document.querySelectorAll('.closeDraw')
const dropDown = document.querySelectorAll('.dropdown-content')
const navLink = document.querySelectorAll('.down')

navLink.forEach((b, index) =>
	b.addEventListener('click', function () {
		// dropDown.classList.toggle('downActive')
		const dropDown = document.querySelectorAll('.dropdown-content')

		console.log(dropDown)
		if (dropDown[index].style.display === 'none') {
			dropDown[index].style.display = 'block'
		} else {
			dropDown[index].style.display = 'none'
		}
	})
)
closeDraw.forEach((e) =>
	e.addEventListener('click', function () {
		dropDown.forEach((e) => (e.style.display = 'none'))
	})
)

indusbox.forEach((e) =>
	e.addEventListener('click', function () {
		indusbox.forEach((e) => e.removeAttribute('id'))
		e.setAttribute('id', 'technoActive')
	})
)

indusLink1.addEventListener('click', function () {
	indusInfo1.style.display = 'grid'
	indusInfo2.style.display = 'none'
	indusInfo3.style.display = 'none'
	indusInfo4.style.display = 'none'
})
indusLink2.addEventListener('click', function () {
	indusInfo1.style.display = 'none'
	indusInfo2.style.display = 'grid'
	indusInfo3.style.display = 'none'
	indusInfo4.style.display = 'none'
})
indusLink3.addEventListener('click', function () {
	indusInfo1.style.display = 'none'
	indusInfo2.style.display = 'none'
	indusInfo3.style.display = 'grid'
	indusInfo4.style.display = 'none'
})

indusLink4.addEventListener('click', function () {
	indusInfo1.style.display = 'none'
	indusInfo2.style.display = 'none'
	indusInfo3.style.display = 'none'
	indusInfo4.style.display = 'grid'
})
