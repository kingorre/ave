@@include('../../node_modules/swiper/swiper-bundle.min.js');

//======COLOR=====

const selectColor = document.querySelector('.form-detail__select--color');
const selectColor_title = selectColor.querySelector('.form-detail__name--color');
const selectColor_labels = selectColor.querySelectorAll('.form-detail__label--color');


selectColor_title.addEventListener('click', () => {
  if ('active' === selectColor.getAttribute('data-state')) {
    selectColor.setAttribute('data-state', '');
  } else {
    selectColor.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectColor_labels.length; i++) {
  selectColor_labels[i].addEventListener('click', (evt) => {
    selectColor_title.textContent = evt.target.textContent;
    selectColor.setAttribute('data-state', '');
  });
}

//======SIZE=====

const selectSize = document.querySelector('.form-detail__select--size');
const selectSize_title = selectSize.querySelector('.form-detail__name--size');
const selectSize_labels = selectSize.querySelectorAll('.form-detail__label--size');


selectSize_title.addEventListener('click', () => {
  if ('active' === selectSize.getAttribute('data-state')) {
    selectSize.setAttribute('data-state', '');
  } else {
    selectSize.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSize_labels.length; i++) {
  selectSize_labels[i].addEventListener('click', (evt) => {
    selectSize_title.textContent = evt.target.textContent;
    selectSize.setAttribute('data-state', '');
  });
}

//====QUANTITY======

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

// const input = document.querySelector('.form-detail__num');
// let inputVal = input.value;
// let min = input.min;


document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;
  let burger = document.querySelector(".burger");
  let menuBody = document.querySelector(".menu__body");
  
  if (targetElement.classList.contains("burger")) {
    burger.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
    if (targetElement.classList.contains('menu__opener')) {
      targetElement.closest('.menu__item').classList.toggle('_opened');
      targetElement.classList.toggle('_opened');
    }
    }

    const input = document.querySelector('.form-detail__num');
    const btnPlus = document.querySelector('.form-detail__qty--plus');
    const btnMinus = document.querySelector('.form-detail__qty--minus');
    const min = parseInt(input.getAttribute('min'));
    
    btnPlus.addEventListener('click', function() {
      let oldVal = parseInt(input.getAttribute('value'))
      let newVal = oldVal + 1;
      input.setAttribute('value', newVal)

      let event = new Event('change');
      input.dispatchEvent(event);
    })

    btnMinus.addEventListener('click', function() {
      let oldVal = parseInt(input.getAttribute('value'))
      let newVal;
      if (oldVal > min) {
        newVal = oldVal -1 ;
      } else  {
        newVal = oldVal;
      }
      input.setAttribute('value', newVal)
      console.log('min');

      let event = new Event('change');
      input.dispatchEvent(event);
    })

    




//======CURRENCY=====

const selectSingle = document.querySelector('.form-currency__select');
const selectSingle_title = selectSingle.querySelector('.form-currency__title');
const selectSingle_labels = selectSingle.querySelectorAll('.form-currency__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const swiperReview = new Swiper('.detail__slider', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.detail-next',
    prevEl: '.detail-prev',
  }
});

//==========RATING===========
let ratingBlock = document.querySelector('.rating__stars');
let rating = ratingBlock.getAttribute('data-rating');
let progressBlock = document.querySelector('.rating__front');
progressBlock.style.width = rating * 20 + '%';



$(function () {

  $('[data-fancybox]').fancybox({
    youtube : {
        controls : 1,
        showinfo : 0
    }
  });
})

'use strict'

  const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
 

  //=====TABS======

  const tabs = document.querySelectorAll('.tab-detail__btn');
  const contents = document.querySelectorAll('.tab-detail__box');

  [...tabs].forEach(tab => tab.addEventListener('click', tabClick));

  function tabClick(event) {
    const tabId = event.target.dataset.id;

    [...tabs].forEach((tab, i) => {
      tab.classList.remove('_active');
      contents[i].classList.remove('_active')
    });

    tabs[tabId - 1].classList.add('_active');
    contents[tabId - 1].classList.add('_active')
  }
