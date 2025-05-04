function showSection(id) {
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}

async function loadJSON(file, containerId, type) {
  const res = await fetch(file);
  const data = await res.json();
  const container = document.getElementById(containerId);
  let html = "";
  data[type].forEach(item => {
    html += `<article><h3>${item.title}</h3><small>${item.date}</small><p>${item.content}</p></article>`;
  });
  container.innerHTML = html;
}

loadJSON("poems.json", "poem-list", "poems");
loadJSON("devotionals.json", "devotional-list", "devotionals");
loadJSON("reviews.json", "review-list", "reviews");