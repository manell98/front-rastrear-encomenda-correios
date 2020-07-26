var btnRastrear = document.querySelector("#rastrear-encomenda")

btnRastrear.addEventListener("click", function() {

    var xhr = new XMLHttpRequest();

    let codRastreio = "OJ695357777BR";

    xhr.open("GET", `http://localhost:3000/apiRastreio?codRastreio=${codRastreio}`);

    xhr.addEventListener("load", function() {

        if(xhr.status == 200) {

            var result = JSON.parse(xhr.responseText);

            console.log("result ", result);

        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }

    });

    xhr.send();
});
