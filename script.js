const socialOpen = document.querySelector('.open');
const socialContainer = document.querySelector('.social-container');

socialOpen.addEventListener('click', showSocial);

function showSocial() {
  socialOpen.classList.toggle('active');
  socialContainer.classList.toggle('open');
}

//main code
const api_key = '62688d1e-e254-47aa-8bd8-3f839f6870bd';
const url = `https://api.thecatapi.com/v1/images/search?limit=1&mime_types=gif&api_key=${api_key}`;
const img = document.querySelector('.cat__image');
const button = document.querySelector('.get');
const cat = document.querySelector('.cat');
const info = document.querySelector('.info');

button.addEventListener('click', displayCat)

function getCatUrl() {
  let result =  fetch(url)
    .then(result => {
      return result.json();
    })
    .then(data => {
      return data;
    })
  return result;
}

async function displayCat() {
  cat.style.display = 'none';
  info.innerHTML = 'Loading... (─‿‿─)';
  const data = await getCatUrl();
  cat.style.display = 'block';
  img.setAttribute('src',data[0].url);
  setTimeout(()=> {
    info.innerHTML = '( ͡❛ ͜ʖ ͡❛)👌';
  }, 1500)
}
