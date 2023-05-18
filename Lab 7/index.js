window.onload = async function () {
    //get image initially
    getImages();
    document.getElementById('refresh').onclick = getImages;
}

async function getImages() {
    //fetch request
    const url = 'https://randomuser.me/api?results=5';
    const responsePromise = await fetch(url);
    const data = await responsePromise.json();
    let mainContent = '';
    data.results.forEach((each, index) => {
        mainContent += `
        <div class='image-section' id=${each.phone} ${index}>
            <div id="left-side">
                <img src="${each.picture.large}"/>
            </div>
            <div id="right-side">
            <h3>${each.name.first} ${each.name.last}</h3>
            <p>
                <ul>
                    <li>${each.phone}</li>
                    <li>${each.email}</li>
                </ul>
            </p>
            </div>
        </div>`
    });
    document.getElementById("main-content").innerHTML = mainContent;
}
