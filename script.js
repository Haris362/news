const news = async function () {
    const key = `f3eabcc900f956dd2972aad01bfe5b90`
    const country = `pk`;
    try {
        const response = await fetch(`https://gnews.io/api/v4/search?q=pakistan&country=${country}&lang=en&max=10&token=${key}`);
        const data = await response.json()
        const newsData = data.articles;
        console.log(data);

        const newsContainer = document.getElementById("news-Container");
        newsData.forEach(element => {
            const card = document.createElement("div");
            card.classList.add("news-card")
            card.innerHTML = `
                <img src="${element.image}" alt="">
                <div class="news-content">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <a href="${element.url}" target="_blank">Read more</a>
                </div>
        `
            newsContainer.appendChild(card)
        });
    } catch (error) {
        console.log(error);

    }

}
news()