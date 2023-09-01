const link1 = document.querySelector('.link1')
const link2 = document.querySelector('.link2')
const link3 = document.querySelector('.link3')
const link4 = document.querySelector('.link4')
const link5 = document.querySelector('.link5')
const link6 = document.querySelector('.link6')
const links = document.querySelectorAll('.process-link')
const infoSection1 = document.querySelector('.process-info1')
const infoSection2 = document.querySelector('.process-info2')
const infoSection3 = document.querySelector('.process-info3')
const infoSection4 = document.querySelector('.process-info4')
const infoSection5 = document.querySelector('.process-info5')
const infoSection6 = document.querySelector('.process-info6')
const dropDown = document.querySelector('.dropdown-content')
const navLink = document.querySelectorAll('.down')
const closeDraw = document.querySelectorAll('.closeDraw')

closeDraw.forEach((e) =>
	e.addEventListener('click', function () {
		dropDown.forEach((e) => (e.style.display = 'none'))
	})
)
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

links.forEach((e) =>
	e.addEventListener('click', function () {
		links.forEach((e) => e.removeAttribute('id'))
		e.setAttribute('id', 'process-active')
		// processInfo.forEach((e) => {
		//     e.classList.add('activeInfo')
		//     e.style.display = 'flex'
		// })
	})
)

try {
	link1.addEventListener('click', function () {
		infoSection1.style.display = 'flex'
		infoSection2.style.display = 'none'
		infoSection3.style.display = 'none'
		infoSection4.style.display = 'none'
		infoSection5.style.display = 'none'
		infoSection6.style.display = 'none'
	})
	link2.addEventListener('click', function () {
		infoSection1.style.display = 'none'
		infoSection2.style.display = 'flex'
		infoSection3.style.display = 'none'
		infoSection4.style.display = 'none'
		infoSection5.style.display = 'none'
		infoSection6.style.display = 'none'
	})
	link3.addEventListener('click', function () {
		infoSection1.style.display = 'none'
		infoSection2.style.display = 'none'
		infoSection3.style.display = 'flex'
		infoSection4.style.display = 'none'
		infoSection5.style.display = 'none'
		infoSection6.style.display = 'none'
	})

	link4.addEventListener('click', function () {
		infoSection1.style.display = 'none'
		infoSection2.style.display = 'none'
		infoSection3.style.display = 'none'
		infoSection4.style.display = 'flex'
		infoSection5.style.display = 'none'
		infoSection6.style.display = 'none'
	})
	link5.addEventListener('click', function () {
		infoSection1.style.display = 'none'
		infoSection2.style.display = 'none'
		infoSection3.style.display = 'none'
		infoSection4.style.display = 'none'
		infoSection5.style.display = 'flex'
		infoSection6.style.display = 'none'
	})
	link6.addEventListener('click', function () {
		infoSection1.style.display = 'none'
		infoSection2.style.display = 'none'
		infoSection3.style.display = 'none'
		infoSection4.style.display = 'none'
		infoSection5.style.display = 'none'
		infoSection6.style.display = 'flex'
	})
} catch (e) {
	console.log('eeeeeeeer= ===== ', e)
}

// Service

// technologies
