	// JavaScript Document
/*eslint-env es6*/

const links = document.querySelectorAll('.menu a');
const list = document.querySelector('.menu');
const upbtn = document.querySelector('#scroll-up-btn');
const home = document.querySelector('#home-link');


links.forEach(link => {
	
link.addEventListener('click', function(){
	list.querySelector('.cool-link').classList.remove('cool-link');
	this.classList.add('cool-link');
	});
});

	
window.addEventListener('scroll', ()=>{
	const nav  = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 0);
})

upbtn.addEventListener('click', function(){
	this.classList.add('clean-btn');
	window.scrollTo(0,0);
})

home.addEventListener('click', function(){
	window.scrollTo(0,0);
})


/*var navUl = document.querySelectorAll( '.menu2' );
navUl.addEventListener( 'click', checkLi );

function checkLi( event ) {
  // Just for testing... remove the following line:
  console.log( 'clicked on', event.target.tagName );
  // Only apply our actions if we really clicked on the link.
  if ( event.target.tagName === 'A' ) {
    navUl.querySelectorAll( 'li' ).forEach( el => el.classList.remove( 'cool-link' ) );
    event.target.parentNode.classList.add( 'cool-link' );
  }
}*/