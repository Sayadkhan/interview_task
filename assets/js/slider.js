const $slider = document.querySelectorAll(".slider");

const slider = {
  speed: 10,
  isOnMouseDown: false,

  onMouseMove: function (e) {
    e.preventDefault();
    if (!slider.isOnMouseDown) {
      return;
    }

    const target = e.currentTarget;
    target.scrollLeft -= e.movementX * slider.speed;
  },

  cancelMouseMove: function () {
    slider.isOnMouseDown = false;
  },

  onMouseDown: function (e) {
    slider.isOnMouseDown = true;

    const target = e.currentTarget;

    slider.scrollLeft = target.scrollLeft;
    slider.initial_x = e.pageX - slider.scrollLeft;
  },
};

$slider.forEach((e) => {
  e.addEventListener("mousedown", slider.onMouseDown);
  e.addEventListener("mousemove", slider.onMouseMove);
  e.addEventListener("mouseup", slider.cancelMouseMove);
  e.addEventListener("mouseleave", slider.cancelMouseMove);
});
