const currentTime = setInterval(function () {
  const now = new Date();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getMinutes()}`.padStart(2, 0);
  const sec = `${now.getSeconds()}`.padStart(2, 0);
  let meridian = `AM`;
  if (12 <= hour && hour < 17) {
    meridian = `PM`;
    document.querySelector(".pics").src =
      "https://www.do-pal.co.in/wp-content/uploads/2019/03/good-afternoon-cute-dog-images.jpg";
  } else if (17 <= hour && hour < 20) {
    meridian = `PM`;
    document.querySelector(".pics").src =
      "https://memegenerator.net/img/instances/73720590.jpg";
  } else if (20 <= hour && hour < 6) {
    meridian = `PM`;
    document.querySelector(".pics").src =
      "https://i.pinimg.com/originals/56/2f/a9/562fa9687cff0023c3fd4f868916d55c.jpg";
  } else {
    meridian = `AM`;
    document.querySelector(".pics").src =
      "https://i.pinimg.com/originals/3f/0f/e1/3f0fe1df1c1443e9561833c8771d5c14.png";
  }
  document.querySelector(
    ".tick"
  ).textContent = `${hour}:${min}:${sec} ${meridian}`;
}, 1000);
