import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import SkeletonSlider from "./SkeletonSlider";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/AnimeSlider.css"; // Import the CSS file

const PlaceholderImg = '/images/placeholder.jpg'; // Placeholder image path

function AnimeSlider() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/animeData.json')
      .then(response => response.json())
      .then(data => {
        setAnimeList(data);
        setIsLoading(false);
      });
  }, []);

  let i = 454;

  const LgSwiper = () => (
    <Swiper
      slidesPerView={6}
      spaceBetween={20}
      freeMode={false}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper mt-4 pt-1"
    >
      {isLoading && (
        <div className="row">
          <SkeletonSlider cards={6} cols={"col-2"} />
        </div>
      )}
      {animeList.map((anime) => (
        <SwiperSlide key={anime.anime_id + i++}>
          <Link to={`/anime/${anime.anime_id}`}>
            <div className="anime-card">
              <div className="imgHolder">
                <img
                  src={`/images/${anime.anime_id}.jpeg`}
                  alt={anime.input_anime_title}
                  onError={(e) => e.target.src = PlaceholderImg}
                  className={anime.orientation === "landscape" ? "landscape" : ""}
                />
              </div>
              <span>{anime.input_anime_title}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const MdSwiper = () => (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      freeMode={false}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper mt-4 pt-1"
    >
      {isLoading && (
        <div className="row">
          <SkeletonSlider cards={4} cols={"col-3"} />
        </div>
      )}
      {animeList.map((anime) => (
        <SwiperSlide key={anime.anime_id + i++}>
          <Link to={`/anime/${anime.anime_id}`}>
            <div className="anime-card">
              <div className="imgHolder">
                <img
                  src={`/images/${anime.anime_id}.jpeg`}
                  alt={anime.input_anime_title}
                  onError={(e) => e.target.src = PlaceholderImg}
                  className={anime.orientation === "landscape" ? "landscape" : ""}
                />
              </div>
              <span>{anime.input_anime_title}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const SmSwiper = () => (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      freeMode={false}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[FreeMode, Pagination, Navigation]}
      className="mySwiper mt-4 pt-1"
    >
      {isLoading && (
        <div className="row">
          <SkeletonSlider cards={2} cols={"col-6"} />
        </div>
      )}
      {animeList.map((anime) => (
        <SwiperSlide key={anime.anime_id + i++}>
          <Link to={`/anime/${anime.anime_id}`}>
            <div className="anime-card">
              <div className="imgHolder">
                <img
                  src={`/images/${anime.anime_id}.jpeg`}
                  alt={anime.input_anime_title}
                  onError={(e) => e.target.src = PlaceholderImg}
                  className={anime.orientation === "landscape" ? "landscape" : ""}
                />
              </div>
              <span>{anime.input_anime_title}</span>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const isSmallScreen = window.innerWidth <= 768;
  const isMedScreen = window.innerWidth <= 992;

  return (
    <section className="py-5">
      <div className="animeSlide container">
        <div className="slider-links d-flex justify-content-between align-items-center">
          <span className="slider-title fs-4 text-uppercase border-bottom border-2 border-main-color">
            Anime list
          </span>
          <Link to={"animelist/top/1"} className="view-more fs-6 text-uppercase">
            view more
          </Link>
        </div>
        {isSmallScreen ? <SmSwiper /> : isMedScreen ? <MdSwiper /> : <LgSwiper />}
      </div>
    </section>
  );
}

export default AnimeSlider;
