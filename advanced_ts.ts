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
                </div>
			</div>
`;

};
document.getElementById("workplease").innerHTML = eat;

