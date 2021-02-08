const _load = async () => {

    const data = await fetch('https://api.nasa.gov/planetary/apod?api_key=JZLWuJDR9crbBSjYEFfoziVpdkNQq6FNywPhfzdT')
    .then(response => response.json());

    console.log(data);

    document.getElementById("root").insertAdjacentHTML("afterbegin", `
        <img src="${data.url}" />
    `);
}

window.addEventListener("load", _load);