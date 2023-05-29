//postJSON
$.getJSON('./src/assets/data/post.json',function(data){
  let post = data.post;
  $.each(post, function(i,data){
    $('.post.container').append(`<div class="post-box ${data.id}"><img src="./src/assets/images/${data.image}" class="post-img" /><h2 class="category">${data.category}</h2><a href="post-title.html" class="post-title">${data.title}</a><span class="post-date">${data.date}</span><p class="post-description">${data.description}</p><div class="profile"><img src="./src/assets/images/${data.profile}" class="profile-img"/><span class="profile-name">AstaXD</span></div></div>`);
  })
});


// filterJS
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });
  //   add active btn
  $(".filter-item").click(function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

