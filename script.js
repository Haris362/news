const news = async function () {
    const key = `f3eabcc900f956dd2972aad01bfe5b90`
    

    try {
        const country = document.getElementById("input");
        document.getElementById("search").addEventListener("click",async function(){
        const val = country.value.toLowerCase().trim()
        const response = await fetch(`https://gnews.io/api/v4/top-headlines?country=${val}&lang=en&max=10&token=${key}`);
        const data = await response.json()
        const newsData = data.articles;
        console.log(data);

        const newsContainer = document.getElementById("news-Container");
        newsData.forEach(element => {

         
            const card = document.createElement("div");
            card.classList.add("news-card")
            card.innerHTML = `
                
                <div class="news-content">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <a href="${element.url}" target="_blank">Read more</a>
                </div>
        `
            newsContainer.appendChild(card)
        });
        })
    } catch (error) {
        console.log(error);

    }

}
news()