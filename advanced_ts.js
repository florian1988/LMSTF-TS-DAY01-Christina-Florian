console.log(setMenu.menu);
var eat = "";
for (var _i = 0, _a = setMenu.menu; _i < _a.length; _i++) {
    var i = _a[_i];
    eat += "<div class=\"card col-xl-5 bg-secondary text-white\">\n                <img class=\"card-img-top\" src=\"" + i.image + "\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">" + i.name + "</h4>\n                    <p class=\"card-text\">" + i.info + "</p>\n                    \n                    <p class=\"card-text\">\n                      " + i.price + "\n                    </p>\n\t\t\t\t<div>\n\t\t\t\t<input class=\"inputone\" type=\"text\">\n\t\t\t\t<button class=\"buttonone\" type=\"submit\">button</button>\n\t\t\t\t<p id=\"pleaseWork\"></p>\n\t\t\t\t</div>\n\n                </div>\n\t\t\t</div>\n";
}
;
document.getElementById("workplease").innerHTML = eat;
var bt = document.getElementsByClassName("buttonone");
// console.log(bt);
for (var i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", setting);
}
function setting() {
    var input = document.getElementsByClassName("inputone");
    console.log(input.value);
    // var sort = input[y];
    document.getElementById("pleaseWork").innerHTML = input;
}
