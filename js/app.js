// load all categories

const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const categories = data.data;
    // console.log(categories);

    categories.forEach(category => {
        // console.log(category.category);
        const dataContainer = document.getElementById('data-container');
        const div = document.createElement('div');
        div.innerHTML = `
      <a onclick="handleMusic('${category.category_id}')" class="bg-gray-200 py-1 px-3 text-lg cursor-pointer">${category.category}</a>`;
        dataContainer.appendChild(div);
    });

}

const handleMusic = async (categoryId) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    const musics = data.data;
    console.log(musics);
    const musicsContainer = document.getElementById('musics-container');
    musicsContainer.innerText = '';

    musics.forEach((music) => {
        console.log(music);


        const div = document.createElement('div');
        div.classList = `card  bg-base-100 shadow-xl`;
        div.innerHTML = `
        <figure><img class="h-44 w-full" src="${music.thumbnail}" alt="thumbnail" /></figure>
                <div class="card-body">
              
                    <div class="card-title">
                    <figure><img class="h-10 w-10 rounded-full" src="${music.authors[0].profile_picture}" alt="thumbnail" /></figure>
                        <h2 class="">${music.authors[0].profile_name}</h2>
                    </div>
                    <p>${music.others.views} views</p>
                 
                </div>
            </div>
        `;
        musicsContainer.appendChild(div);
    })

}

handleCategory()