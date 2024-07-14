import { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Header({ type }) {
  const [destination, setDestination] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [openDate, setOpenDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleSelect = (ranges) => {
    setOpenDate([ranges.selection]);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
navigate("/hotels", {state: {destination: destination, date: openDate, options: options}})
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <i className="headerItemIcon fa-solid fa-bed"></i>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <i className="headerItemIcon fa-solid fa-plane"></i>
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <i className="headerItemIcon fa-solid fa-car"></i>
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <i className="headerItemIcon fa-solid fa-utensils"></i>
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <i className="headerItemIcon fa-solid fa-hotel"></i>
            <span>Hotel</span>
          </div>
        </div>
        {
          type !== "list" &&
          <>
            {" "}

            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Booking account.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-calendar-days"></i>
                <span
                  onClick={() => setShowDate(!showDate)}
                  className="headerSearchText">{`${format(
                  openDate[0].startDate,
                  "MM/dd/yyyy"
                )} to ${format(openDate[0].endDate, "MM/dd/yyyy")}`}</span>
                {showDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={openDate}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <i className="headerIcon fa-solid fa-person"></i>
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText">{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({ ...options, adult: options.adult - 1 })
                          }>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({ ...options, adult: options.adult + 1 })
                          }>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({
                              ...options,
                              children: options.children - 1,
                            })
                          }>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({
                              ...options,
                              children: options.children + 1,
                            })
                          }>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({ ...options, room: options.room - 1 })
                          }>
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() =>
                            setOptions({ ...options, room: options.room + 1 })
                          }>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerButton" onClick={handleSearch}>Search</button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default Header;
