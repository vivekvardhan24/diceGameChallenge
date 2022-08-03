if(window.performance.getEntriesByType("navigation")[0].type==="reload"){
    console.log(window.performance.getEntriesByType("navigation")[0].type)
    var randomNumber1 = Math.floor(Math.random()*6)+1
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

    var randomNumber2 = Math.floor(Math.random()*6)+1
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

    if(randomNumber1>randomNumber2){
        var temp = document.createElement("script")
        document.querySelector("head").appendChild(temp)
        document.firstElementChild.firstElementChild.querySelector("script").setAttribute('src','https://kit.fontawesome.com/83f0db8b9d.js');
        document.firstElementChild.firstElementChild.querySelector("script").setAttribute('crossorigin','anonymous');
        document.querySelector("h1").innerHTML = "<i class='fa-brands fa-apple' id='fg'></i> Player 1 Wins!"
    }
    else if(randomNumber1<randomNumber2){
        var temp = document.createElement("script")
        document.querySelector("head").appendChild(temp)
        document.firstElementChild.firstElementChild.querySelector("script").setAttribute('src','https://kit.fontawesome.com/83f0db8b9d.js');
        document.firstElementChild.firstElementChild.querySelector("script").setAttribute('crossorigin','anonymous');
        document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fa-brands fa-apple' id='fg'></i>"
    }
    else{
        document.querySelector("h1").textContent="Draw!";
    }
}