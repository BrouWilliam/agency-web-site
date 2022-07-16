const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

const data = [
    {
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
    {
        "name": "João Ferreira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "Abigail Bell",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "Arlen Silva",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    },
	{
        "name": "William Pereira",
        "function": "FrontEnd",
        "subtitle": "&#8220;Uma vida calma e modesta traz mais felicidade do que a busca do sucesso combinada com constante inquietação!&#8221;",
        "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam maiores beatae quisquam unde, blanditiis consequuntur ipsa itaque nisi amet enim, sed odio voluptatum! Laborum beatae dolorem deserunt dignissimos quod."
    }
]

const defaultData =  {
        "name": "Our Team &#128520;",
        "subtitle": "We have the best team of this Universe!",
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



const profileTeam = document.querySelectorAll('.person__team');
const detailTeam = document.querySelector('.detail__team ')

const titleTeam = document.querySelector('.title__team');
const functionTeam = document.querySelector('.function__team');
const subtitleTeam = document.querySelector('.subtitle__team');
const descTeam = document.querySelector('.desc__team');


profileTeam.forEach((tab, index) => {
	
	tab.addEventListener('mouseover', () => {
		tab.classList.add('active')

			detailTeam.classList.add('animation')
			titleTeam.innerHTML = data[index].name
			functionTeam.innerHTML = data[index].function
			subtitleTeam.innerHTML = data[index].subtitle
			descTeam.innerHTML = data[index].description

	})

	tab.addEventListener('mouseout', () => {
		tab.classList.remove('active')
		detailTeam.classList.remove('animation')
		titleTeam.innerHTML = defaultData.name
		subtitleTeam.innerHTML = defaultData.subtitle
	})

})


// Our services

let contentService = document.querySelectorAll('.content_services');
const content_service = document.querySelectorAll('.content_service');

for(let i = 0; i < contentService.length; i++){
	contentService[i].onclick = function(){
		let j = 0;
		while (j < contentService.length){
			contentService[j++].className = 'content_services'
		}
		contentService[i].classList.add('active')
	}
}