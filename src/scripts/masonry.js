var $grid = document.querySelector(".grid");
imagesLoaded($grid, function () {
  new Masonry(".grid", {
    percentPosition: true,
    gutter: 15,
  });
});
