import React from "react";

const filmsData = [
  {
    genre: "триллер, драма",
    year: 2021,
    imgSrc:
      "https://kinotv.ru/upload/resize_cache/iblock/cf7/1200_1200_1/xofwbed22is0vm5sfjmivow6jnf3ht7f.jpeg",
  },
  {
    genre: "боевик, экшн",
    year: 2013,
    imgSrc:
      "https://avatars.mds.yandex.net/i?id=f9ac6e652bbe41c61645856fe5c3e435bd490969-8201030-images-thumbs&n=13",
  },
  {
    genre: "военная драма",
    year: 2023,
    imgSrc:
      "https://htv-vsc.kion.ru:32128/CPS/images/universal/film/poster/202306/20230628/4/20230628153405097gje.jpeg?x=496&y=696&ar=ignore",
  },
  {
    genre: "драма, криминал",
    year: 2013,
    imgSrc:
      "https://htv-vsc.kion.ru:32128/CPS/images/universal/film/poster/202309/20230914/15/20230914183114347dgf.webp",
  },
];

const Films = () => {
  return (
    <div className="container p-2">
      <h2 className="my-3">Любимые фильмы</h2>
      <hr />
      <div className="row">
        {filmsData.map((film, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={film.imgSrc}
                className="card-img-top"
                alt="изображение"
              />
              <div className="card-body d-flex flex-column">
                <strong className="card-title">
                  Жанр: <span>{film.genre}</span>
                </strong>
                <p className="card-text">Год выпуска: {film.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Films;
