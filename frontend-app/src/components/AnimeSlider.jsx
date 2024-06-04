import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import SkeletonSlider from "./SkeletonSlider";
import { fetchAnimeList } from "../api";
import AnimeModal from "./AnimeModal";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/AnimeSlider.css"; 

const PlaceholderImg = '/images/placeholder.jpg';

function AnimeSlider() {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadAnimeList = async () => {
      try {
        const data = await fetchAnimeList();
        setAnimeList(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching anime list:", error);
        setIsLoading(false);
      }
    };
    loadAnimeList();
  }, []);

  const handleShowModal = (anime) => {
    setSelectedAnime(anime);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAnime(null);
  };

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
          <div className="anime-card" onClick={() => handleShowModal(anime)}>
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
          <div className="anime-card" onClick={() => handleShowModal(anime)}>
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
          <div className="anime-card" onClick={() => handleShowModal(anime)}>
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
          <Link to={"anime"} className="view-more fs-6 text-uppercase">
            view more
          </Link>
        </div>
        {isSmallScreen ? <SmSwiper /> : isMedScreen ? <MdSwiper /> : <LgSwiper />}
      </div>
      {selectedAnime && (
        <AnimeModal
          show={showModal}
          handleClose={handleCloseModal}
          anime={selectedAnime}
        />
      )}
    </section>
  );
}

export default AnimeSlider;
