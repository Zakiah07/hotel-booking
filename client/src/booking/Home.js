import React, { useState, useEffect } from "react";
import { allHotels } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
import Search from "../components/forms/Search";

const Home = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    loadAllhotels();
  }, []);

  const loadAllhotels = async () => {
    let res = await allHotels();
    setHotels(res.data);
  };

  return (
    <>
      <div className="container-fluid p-5 bg-secondary text-center">
        <h1>All Hotels</h1>
      </div>
      <div className="col">
        <br />
        <Search />
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(hotels, null, 4)}</pre> */}
        {hotels.map((h) => (
          <SmallCard
            key={h._id}
            h={h}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
