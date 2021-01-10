let check = document.getElementById('checkbox');
let item = document.querySelector('.todo_item');
let star = document.getElementById('star');
let j = true;

check.onclick = () => {
	if(check.checked)
	{
		item.setAttribute('class', 'todo_item done')
	}
	else
	{
		item.setAttribute('class', 'todo_item')
	}
};

star.onclick = () => {
	if(check.checked){

	}
	else{
		if(j){
			star.setAttribute('src', './icons/star2.png')
			item.setAttribute('class', 'todo_item marked')
			j = false;
		}
		else{
			star.setAttribute('src', './icons/star.png')
			item.setAttribute('class', 'todo_item')
			j = true;
		}
	}
}