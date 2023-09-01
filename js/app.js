// load all categories

const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const categories = data.data;

    categories.forEach(category => {
        const dataContainer = document.getElementById('data-container');
        const div = document.createElement('div');
        div.innerHTML = `
      <a onclick="handleMusic('${category.category_id}')" class="bg-gray-200 py-1 active:bg-red-600 px-3 text-lg cursor-pointer">${category.category}</a>`;
        dataContainer.appendChild(div);
    });

}
// show all data
const handleMusic = async (categoryId) => {
    const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json()
    const musics = data.data;

    if (musics.length == '0') {
        const errorContainer = document.getElementById('error-container');
        const div = document.createElement('div');
        div.innerHTML = `
        <img class="w-40 mx-auto" src="./img/Icon.png" alt=""> 
        <p class="w-[300px] text-center font-bold text-2xl mx-auto">Oops!! Sorry, There is no content here</p> `;
        errorContainer.appendChild(div);

    }


    const musicsContainer = document.getElementById('musics-container');
    musicsContainer.innerText = '';

    musics.forEach((music) => {
        const second = music?.others?.posted_date;

        // console.log(music);
        const div = document.createElement('div');
        div.classList = `card bg-gray-100 shadow-xl relative`;
        div.innerHTML = `
        <figure><img class="h-44 w-full" src="${music?.thumbnail}" alt="thumbnail" /></figure>
                <div class="card-body">
                <p class="absolute top-28 right-10 text-2xl">${second ? second : 'No time'}</p>
                    <div class="card-title">
                    <figure><img class="h-10 w-10 rounded-full" src="${music.authors[0]?.profile_picture}" alt="thumbnail" /></figure>
                        <h2 class="text-gary-400 text-xl font-bold">${music.authors[0]?.profile_name}</h2>
                    </div>
                    <p>${music?.title
            } </p>
                    <p>${music?.others?.views} views</p>
                  
                </div>
            </div>
        `;
        musicsContainer.appendChild(div);

    })

}

handleCategory()

