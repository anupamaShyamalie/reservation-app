import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import "./list.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MailList from "../../components/mail/MailList";
import Footer from "../../components/footer/Footer";

function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in & Check-out</label>
              <span onClick={() => setShow(!show)} className="dateText">
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
              {show && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            
            <SearchItem img="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_1280.jpg"/>
            <SearchItem img="https://cdn.pixabay.com/photo/2014/07/21/19/20/lobby-398845_1280.jpg" />
            <SearchItem img="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg" />
            <SearchItem img="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg" />
            <SearchItem img="https://cdn.pixabay.com/photo/2020/03/14/20/02/castle-4931672_960_720.jpg" />
          </div>
        </div>
      </div>
        <MailList/>
        <Footer/>
    </div>
  );
}

export default List;
