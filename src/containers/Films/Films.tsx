import React from 'react';

const Films = () => {
    return (
        <>
            <div className="container pt-4">
                <h2 className='mb-4'>Любимые фильмы</h2>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img
                                src="https://kinotv.ru/upload/resize_cache/iblock/cf7/1200_1200_1/xofwbed22is0vm5sfjmivow6jnf3ht7f.jpeg"
                                className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <strong className="card-title">Жанр: <span>триллер, драма</span></strong>
                                <p className="card-text">Год выпуска: 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img
                                src="https://avatars.mds.yandex.net/i?id=f9ac6e652bbe41c61645856fe5c3e435bd490969-8201030-images-thumbs&n=13"
                                className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <strong className="card-title">Жанр: <span>боевик, экшн</span></strong>
                                <p className="card-text">Год выпуска: 2013</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img
                                src="https://htv-vsc.kion.ru:32128/CPS/images/universal/film/poster/202306/20230628/4/20230628153405097gje.jpeg?x=496&y=696&ar=ignore"
                                className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <strong className="card-title">Жанр: <span>военная драма</span></strong>
                                <p className="card-text">Год выпуска: 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card">
                            <img
                                src="https://htv-vsc.kion.ru:32128/CPS/images/universal/film/poster/202309/20230914/15/20230914183114347dgf.webp"
                                className="card-img-top" alt="Card image cap"/>
                            <div className="card-body">
                                <strong className="card-title">Жанр: <span>драма, криминал</span></strong>
                                <p className="card-text">Год выпуска: 2013</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Films;