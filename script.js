var settingsmenu = document.querySelector(".settings-menu");

var  darkBt = document.getElementById("dark-bt");




function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBt.onclick = function(){
    darkBt.classList.toggle("dark-bt-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark");
    }

    else{
        localStorage.setItem("theme","light");
    }

}


if(localStorage.getItem("theme") == "light"){
    darkBt.classList.remove("dark-bt-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme") == "dark"){
    darkBt.classList.add("dark-bt-on");
    document.body.classList.add("dark-theme");
}

else{
    localStorage.setItem("theme","light");
}