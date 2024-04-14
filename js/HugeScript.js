let tetraList = document.querySelectorAll('.tetra');
let TetraBorder = document.querySelectorAll('.tetra');
for(let i = 0; i < tetraList.length; ++i ){
	tetraList[i].addEventListener('mouseenter', function(event){
			event.target.style.border = 'solid 1px blue';
			event.target.lastElementChild.lastElementChild.lastElementChild.style.animation = "arrow 1s";
		console.log('txt');
	});
	tetraList[i].addEventListener('mouseleave', function(event){
		event.target.style.border = 'solid 1px #dee';
		event.target.lastElementChild.lastElementChild.lastElementChild.style.animation = "none";
	});
}
