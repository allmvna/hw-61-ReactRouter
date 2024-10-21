import React from "react";

const musicData = [
  {
    id: 3,
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/642d4a156210003.6362dfc945145.jpg",
    title: "MiyaGi и Эндшпиль - Silhouette",
    interval: 10000,
  },
  {
    id: 2,
    src: "https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1659585400_41-kartinkin-net-p-miyagi-samurai-art-oboi-48.jpg",
    title: "MiyaGi и Эндшпиль - Samurai",
    interval: 2000,
  },
  {
    id: 1,
    src: "https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/01/34/59/02/42/beaa57c40cd7.jpeg",
    title: "MiyaGi и Эндшпиль - Minor",
    interval: 10000,
  },
];

const Music = () => {
  return (
    <div className="container p-2">
      <h2 className="my-3">Любимые песни</h2>
      <hr />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {musicData.map((music, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={music.interval}
              key={music.id}
            >
              <img
                src={music.src}
                className="d-block w-100"
                alt={`Изображение ${music.title}`}
                style={{ height: "600px", objectFit: "cover" }}
              />
              <div
                className="carousel-caption d-flex justify-content-center align-items-center"
                style={{ height: "100%" }}
              >
                <h1>{music.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleInterval"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleInterval"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Music;
