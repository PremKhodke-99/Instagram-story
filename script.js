var arr = [
  {
    dp: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2023/11/896/500/matthew-perry-remembered-friends.jpg?ve=1&tl=1',
    story: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  },
  {
    dp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg/220px-Matt_LeBlanc%2C_Arqiva_British_Academy_Television_Awards%2C_2013_%28tone_crop%29.jpg',
    story: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://cdn.britannica.com/46/242146-050-B3385913/Jennifer-Aniston-Golden-Globes-2020.jpg',
    story: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/David_Schwimmer_2011.jpg/640px-David_Schwimmer_2011.jpg',
    story: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Lisa_Kudrow_2.jpg',
    story: 'https://images.unsplash.com/photo-1485550409059-9afb054cada4?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://www.themoviedb.org/t/p/w500/3bTVQH9vBXAiwGVHXKLylStz4RT.jpg',
    story: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D'
  }
]
var stories = document.querySelector('#storiya');
var clutter = '';
arr.forEach((elem, index) => {
  // console.log(elem)
  clutter += `<div class="story">
                    <img id='${index}' src="${elem.dp}">
                </div>`
})

stories.innerHTML = clutter;

stories.addEventListener('click', (detail) => {
  // console.log(arr[detail.target.id].story);
  var value = arr[detail.target.id].story;
  document.querySelector('#full-screen').style.display = 'block';
  document.querySelector('#full-screen').style.backgroundImage = `url(${value})`


  setTimeout(() => {
    document.querySelector('#full-screen').style.display = 'none';

  }, 3000)
})

