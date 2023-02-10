var page = 1;


function fetchChars(page) {



    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(data => data.json())
    .then(chars => {
        var container = document.getElementById("results");
        container.innerHTML = "";
        console.log(chars, "\n")
        for (var char of chars.results) {
            const name = document.createElement("div");
            let x = document.createTextNode(`${char.name}`);
            name.appendChild(x);

            container.appendChild(name);

            const img = document.createElement("img");
            img.src = `${char.image}`;

           container.appendChild(img);

        }
    })
}

function anterior(){
    if(page <= 0){

    }
    else{
        page = page-1;
        fetchChars(page);
    }
}
function siguiente(){
    console.log("hola soy siguinte", page);
    if(page > 42){

    }else{
    page = page+1;
    fetchChars(page);
    }

}
