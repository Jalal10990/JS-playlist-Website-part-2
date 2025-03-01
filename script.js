function createCard(title, cName, views, monthsOld, dureation, thumbnail){

    let viewStr;
    if(views<1000){
        viiewStr = views;
    }
    else if(views>1000000){
        voewStr = view/1000000 + "M"
    }
    else{
        viewStr = views/1000 + "k"
    }
    let html = `<div class="card">
    <div class="image1">
    <img src="${thumbnail}" alt="img">
    <div class="capsule2">${dureation}</div>
    </div>
    <div class="text1">
          <h1>${title}</h1>
          <p>${cName} . ${viewStr} views . ${monthsOld} day ago</p>
        </div>
        </div>`
        document.querySelector(".container2").innerHTML=
        document.querySelector(".container2").innerHTML + html;
    }
    createCard(
        "Introduction to Art | Jalali Art video #01",
        "Shah-jalal-Art",
        " 727k",
        "30.21",
        "image1.png"
    );
    createCard(
        "Basic to Art | Jalali Art video #02",
        "Shah-jalal-Art",
        " 720",
        "32.01",
        "image1.png"
    );
