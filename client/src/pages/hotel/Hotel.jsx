import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./hotel.css";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mail/MailList";
import { useState } from "react";

function Hotel() {
  const photos = [
    {
      src: "https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234072_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2023/09/05/12/44/mug-8235059_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2019/05/28/00/14/breakfast-4234067_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2015/11/03/16/54/wellness-1021131_1280.jpg",
    },
    {
      src: "https://cdn.pixabay.com/photo/2017/06/09/09/30/swimming-pool-2386261_960_720.jpg",
    },
  ];

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
      {open && (
  <div className="slider">
    <i className="close fas fa-times" onClick={() => setOpen(false)}></i>
    <i
      className="arrow left fas fa-chevron-left"
      onClick={() => handleMove("l")}
    ></i>
    <div className="sliderWrapper">
      <img src={photos[slideNumber].src} alt="" className="sliderImg" />
    </div>
    <i
      className="arrow right fas fa-chevron-right"
      onClick={() => handleMove("r")}
    ></i>
  </div>
)}

        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <i className="fas fa-map-marker-alt"></i>
            <span>Vouge Star, 194, St. James Avenue</span>
            <span>Dubai</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  className="hotelImg"
                  src={photo.src}
                  alt=""
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of city</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street, Tower 32 is a popular spot for guests interested in
                discovering the area. The
                <br />
                nearest airport is John Paul II International Kraków–Balice, 16
                km from Tower Street, and the property offers a paid
                <br />
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Hotel;
