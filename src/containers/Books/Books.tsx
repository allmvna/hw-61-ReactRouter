import React from 'react';

const booksData = [
    {
        genre: "исторический роман",
        year: '1844—1846 гг.',
        imgSrc: "https://cdn.azbooka.ru/cv/w1100/d8f9ddab-65d3-422b-9e42-5d85703acb2d.jpg"
    },
    {
        genre: "роман, магический реализм",
        year: '1980 — 1991 гг.',
        imgSrc: "https://static.bookssecondlife.com.ua/wa-data/public/shop/products/29/77/7729/images/23610/23610.2500.jpeg"
    },
    {
        genre: "современная проза",
        year:'2017 г.',
        imgSrc: "https://simg.marwin.kz/media/catalog/product/cache/41deb699a7fea062a8915debbbb0442c/6/0/eger_e_e_shvallveygand_e_vybor_o_svobode_i_vnutrenney_sile_cheloveka.jpg"
    },
    {
        genre: "роман, фэнтези",
        year: '1982 г.',
        imgSrc: "https://www.litres.ru/pub/c/cover/129222.jpg"
    },
];


const Books = () => {
    return (
        <div className="container p-2">
            <h2 className='my-3'>Любимые книги</h2>
            <hr/>
            <div className="row">
                {booksData.map((book, index) => (
                    <div className="col-md-3 mb-4" key={index}>
                        <div className="card h-100">
                            <img src={book.imgSrc} className="card-img-top" alt='изображение'/>
                            <div className="card-body d-flex flex-column">
                                <strong className="card-title">Жанр: <span>{book.genre}</span></strong>
                                <p className="card-text">Дата написания: {book.year}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;