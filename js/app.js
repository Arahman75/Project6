const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories')
    const data = await res.json()
    const categories = data.data;
    console.log(categories);

    categories.forEach(category => {
        console.log(category.category);
        const dataContainer = document.getElementById('data-container');
        const div = document.createElement('div');
        div.innerHTML = `
      <a class="bg-gray-200 py-1 px-3 text-lg cursor-pointer">${category.category}</a>`;
        dataContainer.appendChild(div);
    });

}
handleCategory()