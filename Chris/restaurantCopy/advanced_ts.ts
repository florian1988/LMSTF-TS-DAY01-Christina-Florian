console.log(setMenu.menu);

var eat : string = "";
function Like(like,id){
 let numLike = Number(like) +1;
 let index = Number(id) -1 ;
 $(".likeCounter:eq("+index+")").html(numLike);
}

for (let i of setMenu.menu) {
	 eat += `<div class="card col-xl-5 bg-secondary text-white">
                <img class="card-img-top" src="${i.image}">
                <div class="card-body">
                    <h4 class="card-title">${i.name}</h4>
                    <p class="card-text">${i.info}</p>
                    
                    <p class="card-text">
                      ${i.price}
                    </p>
                    <div class="alignButton alert-info p-2"><button onclick="Like(${i.likes},${i.id})" type="button" class="btn text-dark btn-sm like">Like <i class="fas fa-thumbs-up"></i> </button>
                        <span class="likeCounter">${i.likes}</span>
                    </div>
                </div>
			</div>
`;


};
document.getElementById("workplease").innerHTML = eat;


