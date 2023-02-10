var page = 1;
var name="";


function fetchCharsp(page) {



    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(data => data.json())
    .then(chars => {
        var container = document.getElementById("results");
        container.innerHTML = "";
        console.log(chars, "\n");
        for (var char of chars.results) {

            var div = document.createElement("div");
            div.innerHTML = `
                <h3>${char.name}</h3>
                <img src="${char.image}" alt="${char.name}">
            `;
            container.appendChild(div);
            /*
            const name = document.createElement("div");
            let x = document.createTextNode(`${char.name}`);
            name.appendChild(x);

            container.appendChild(name);
            

            const img = document.createElement("img");
            img.src = `${char.image}`;

           container.appendChild(img);
           */

        }
    })
}
function fetchCharsn(name) {



    fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    .then(data => data.json())
    .then(chars => {
        var container = document.getElementById("results");
        container.innerHTML = "";
        console.log(chars, "\n");
        for (var char of chars.results) {

            var div = document.createElement("div");
            div.innerHTML = `
                <h3>${char.name}</h3>
                <img src="${char.image}" alt="${char.name}">
            `;
            container.appendChild(div);
            /*
            const name = document.createElement("div");
            let x = document.createTextNode(`${char.name}`);
            name.appendChild(x);

            container.appendChild(name);
            

            const img = document.createElement("img");
            img.src = `${char.image}`;

           container.appendChild(img);
           */

        }
    })
}
function fetchCharsp_n(page, name) {



    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`)
    .then(data => data.json())
    .then(chars => {
        var container = document.getElementById("results");
        container.innerHTML = "";
        console.log(chars, "\n");
        for (var char of chars.results) {

            var div = document.createElement("div");
            div.innerHTML = `
                <h3>${char.name}</h3>
                <img src="${char.image}" alt="${char.name}">
            `;
            container.appendChild(div);
            /*
            const name = document.createElement("div");
            let x = document.createTextNode(`${char.name}`);
            name.appendChild(x);

            container.appendChild(name);
            

            const img = document.createElement("img");
            img.src = `${char.image}`;

           container.appendChild(img);
           */

        }
    })
}
function getPage(page){
    var page = document.getElementById("page").value;
    if(page <=1 && page > 41){
        window.alert("Maximo de 42 pags!");
    }else{
        fetchCharsp(page);
    }

}

function getName(name){
    var name = document.getElementById("nombre").value;



        fetchCharsn(name);
    

}

function anterior(){
    if(page <= 1){

    }
    else{
        page = page-1;
        fetchCharsp(page);
    }
}
function siguiente(){
    if(page > 41){

    }else{
    page = page+1;
    fetchCharsp(page);
    }

}
