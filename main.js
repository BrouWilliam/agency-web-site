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
        "name": "Gustavo Herrique",
        "function": "BackEnd",
        "subtitle": "We have the best team of this Universe!",
        "description": "ipsum Lorem"
    }
];

const defaultData =  {
        "name": "Our Team",
        "subtitle": "We have the best team of this Universe!",
    }



inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});



const profileTeam = document.querySelectorAll('.person__team');

const titleTeam = document.querySelector('.title__team');
const functionTeam = document.querySelector('.function__team');
const subtitleTeam = document.querySelector('.subtitle__team');
const descTeam = document.querySelector('.desc__team');


profileTeam.forEach((tab, index) => {
	
	tab.addEventListener('mouseover', () => {
		tab.classList.add('active')

			titleTeam.innerHTML = data[index].name
			functionTeam.innerHTML = data[index].function
			subtitleTeam.innerHTML = data[index].subtitle
			descTeam.innerHTML = data[index].description

	})

	tab.addEventListener('mouseout', () => {
		tab.classList.remove('active')

		titleTeam.innerHTML = defaultData.name
		subtitleTeam.innerHTML = defaultData.subtitle
	})

})

