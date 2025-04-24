const tabs= document.getElementById('tabs');
const contents= document.querySelectorAll('.content');

const Chenge =el =>{
	for(let i=0; i<tabs.children.length; i++){
		tabs.children[i].classList.remove('active');
	}
		el.classList.add('active');
	}

	tabs.addEventListener('click', e =>{
		Chenge(e.target);
		const currTub=e.target.dataset.btn;
	
		for(let i=0; i<contents.length; i++){
			contents[i].classList.remove('active');

			if(contents[i].dataset.cont===currTub){
				contents[i].classList.add('active');
			}
		}		
})		


		
