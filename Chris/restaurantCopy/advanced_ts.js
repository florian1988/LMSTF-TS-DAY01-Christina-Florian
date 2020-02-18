console.log(setMenu.menu);
var eat = "";

function Like(like, id) {
    var numLike = Number(like) + 1;
    var index = Number(id) - 1;
    $(".likeCounter:eq(" + index + ")").html(numLike);
}
for (var _i = 0, _a = setMenu.menu; _i < _a.length; _i++) {
    var i = _a[_i];
    eat += "<div class=\"card col-xl-5 bg-secondary text-white\">\n                <img class=\"card-img-top\" src=\"" + i.image + "\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">" + i.name + "</h4>\n                    <p class=\"card-text\">" + i.info + "</p>\n                    \n                    <p class=\"card-text\">\n                      " + i.price + "\n                    </p>\n                    <div class=\"alignButton alert-info p-2\"><button onclick=\"Like(" + i.likes + "," + i.id + ")\" type=\"button\" class=\"btn text-dark btn-sm like\">Like <i class=\"fas fa-thumbs-up\"></i> </button>\n                        <span class=\"likeCounter\">" + i.likes + "</span>\n                    </div>\n                </div>\n\t\t\t</div>\n";
};
document.getElementById("workplease").innerHTML = eat;