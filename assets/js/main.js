let container, data, entries

container = document.querySelector("[data-timeline]")
entries = []

data = {
      id:1,
      avatar: "https://img-os-static.hoyolab.com/avatar/avatar30029.png",
      name: "Genshin Impact Official",
      tag: "test",
      body: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsa laudantium deserunt ullam amet nemo ipsam sed deleniti, perferendis, quod quae dolorum illo repudiandae possimus tempore! Maiores qui voluptatum dolorum.`,
      views: 9,
      comments: 10,
      mg: 70
}

function Entry(data) {

      entries.push(data)
}

for (var i = 0; i < 50; i++) {
      new Entry(data)

}
entries.map((e, i) => {
      container.innerHTML += `
<div data-id="${i}" class="entry__card">
      <article class="entry">
          <div class="header">
              <div class="h__l">
                  <div class="av">
                      <img src="${e.avatar}" lazy="loaded">
                  </div>
                  <div class="us">
                      <span class="name">${e.name}</span>
                      <span class="tag">@${e.tag}</span>
                  </div>
              </div>
              <div class="h__r">
                  <button class="kg__button kg-danger">Follow</button>
              </div>
          </div>
  
          <div class="body">
              <p>${e.body}</p>
          </div>
  
          <div class="footer">
              <span><i class="fa-solid fa-eye"></i> ${e.views}</span>
              <span><i class="fa-solid fa-comment-dots"></i> ${e.comments}</span>
              <span><i class="fa-solid fa-heart"></i> ${e.mg}</span>
          </div>
      </article>
</div>
      
`
})
