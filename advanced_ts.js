console.log(setMenu.menu);
var eat = "";
for (var _i = 0, _a = setMenu.menu; _i < _a.length; _i++) {
    var i = _a[_i];
    eat += "<div class=\"card col-xl-5 bg-secondary text-white\">\n                <img class=\"card-img-top\" src=\"" + i.image + "\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">" + i.name + "</h4>\n                    <p class=\"card-text\">" + i.info + "</p>\n                    \n                    <p class=\"card-text\">\n                      " + i.price + "\n                    </p>\n                </div>\n\t\t\t</div>\n";
}
;
document.getElementById("workplease").innerHTML = eat;
