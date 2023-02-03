import React, { useState } from "react";
import { DatePicker, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";
import { useNavigate } from "react-router-dom";

// destructure value from ant components
const { RangePicker } = DatePicker;
const { Option } = Select;
//route

const Search = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [bed, setBed] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <div className="d-flex pb-4">
      <div className="w-100">
        <textarea
          className="form-control"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          style={{ height: "50px" }}
        />
      </div>
      <RangePicker
        className="w-100"
        onChange={(value, dateString) => setDate(dateString)}
        disabledDate={(current) =>
          current && current.valueOf() < moment().subtract(1, "days")
        }
      />
      <Select
        onChange={(value) => setBed(value)}
        className="w-100"
        size="large"
        placeholder="Number of beds"
      >
        <Option key={1}>{1}</Option>
        <Option key={2}>{2}</Option>
        <Option key={3}>{3}</Option>
        <Option key={4}>{4}</Option>
      </Select>
      <SearchOutlined
        onClick={handleSubmit}
        className="btn btn-primary p-3 btn-square"
      />
    </div>
  );
};

export default Search;
