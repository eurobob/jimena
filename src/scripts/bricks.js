const sizes = [
  { columns: 1, gutter: 5 },
  { mq: "768px", columns: 2, gutter: 5 },
  { mq: "1024px", columns: 3, gutter: 5 },
  { mq: "1200px", columns: 6, gutter: 5 },
];

const instance = Bricks({
  container: ".tiles",
  packed: "data-packed",
  sizes,
  position: false,
});

var $grid = document.querySelector(".tiles");
imagesLoaded($grid, function () {
  //   instance.pack().resize(true);
});
