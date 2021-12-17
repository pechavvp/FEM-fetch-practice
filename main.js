let firstName = document.getElementById("inputName");
const serverUrl = 'https://api.genderize.io';
const serverUrl2 = 'https://api.nationalize.io';
let button = document.getElementById("button");
button.addEventListener("click", loadInfo);

async function loadInfo() {
    let url = `${serverUrl}/?name=${firstName.value}`;
    let nameOutput = await fetch(url)
    .then(response => response.json())
    .then(response => `${bigFirstLetter(response.name)} is ${response.gender}`);

    let url2 = `${serverUrl2}/?name=${firstName.value}`;
    let nameOutput2 = await fetch(url2)
    .then(response => response.json())
    .then(response => `${bigFirstLetter(response.name)} from ${response.country[0].country_id} or ${response.country[1].country_id} or ${response.country[2].country_id}`);

    alert(nameOutput + "\n" + nameOutput2);
}

function bigFirstLetter(str) {
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}