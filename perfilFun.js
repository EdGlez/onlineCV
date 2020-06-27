var clicks = 0;

function resi() {
    var myImg = document.querySelector("#profileImage");
    if(clicks == 0) {
         myImg.style.width = "400px";
         myImg.style.heigth = "auto";
        clicks = 1;
    }
    else{
    myImg.style.width = "200px";
    myImg.style.heigth = "200px";
    clicks =0;
    }
}