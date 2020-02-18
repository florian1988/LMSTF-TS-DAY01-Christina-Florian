console.log(setMenu.menu);

var eat : string = "";

for (let i of setMenu.menu) {


	 eat += `<div class="card col-xl-5 bg-secondary text-white">
                <img class="card-img-top" src="${i.image}">
                <div class="card-body">
                    <h4 class="card-title">${i.name}</h4>
                    <p class="card-text">${i.info}</p>
                    
                    <p class="card-text">
                      ${i.price}
                    </p>
				<div>
				<input class="inputone" type="text">
				<button class="buttonone" type="submit">button</button>
				<p id="pleaseWork"></p>
				</div>

                </div>
			</div>
`;

};
document.getElementById("workplease").innerHTML = eat;

var bt = document.getElementsByClassName("buttonone");

// console.log(bt);

for(let i = 0; i < bt.length; i++){
	
	bt[i].addEventListener("click",setting)
}


function setting() {		
 
	let input = document.getElementsByClassName("inputone");	
	console.log(input.value);
	// var sort = input[y];
	document.getElementById("pleaseWork").innerHTML = input;
	
	}



