import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import celebrities from "../../data/celebrities.json";
import "./style.css";
import Confirmation from "../Confirmation";
const CelebretiesData = () => {
  const [celebritiesList, setCelebritiesList] = useState([]);
  const [isShow, setIsShow] = useState(null);
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    celebrities && setCelebritiesList(celebrities);
  }, []);

  const openAccordian = (i) => {
    setIsShow((prev) => (prev === i ? null : i));
  };

  const deleteCelebrity = () => {
    setConfirm(true);
  };

  const ageCoverter = (date) => {
    let dob = new Date(date);
    let monthDeff = Date.now() - dob.getTime();
    let ageDate = new Date(monthDeff);
    let year = ageDate.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div className="container">
      {confirm && <Confirmation />}
      {celebritiesList.map((data, i) => (
        <div className="accordian" key={data.id}>
          <div className="celebrity-detail">
            <div className="celebrity">
              <img
                src={data.picture}
                alt={data.picture}
                className="celebrity-picture"
              />
              <input
                type="text"
                value={data.first + data.last}
                readOnly={true}
              />
              {/* <p className="celebrity-name">
                {data.first} {data.last}
              </p> */}
            </div>
            <span className="plus-minus" onClick={() => openAccordian(i)}>
              +
            </span>
          </div>
          {i === isShow && (
            <div>
              <div className="celebrities-dob-gen-country">
                <div>
                  <p>Age</p>
                  <input
                    type="text"
                    value={ageCoverter(data.dob)}
                    readOnly={true}
                  />
                  {/* <p className="date-of-birth">{ageCoverter(data.dob)}</p> */}
                </div>
                <div>
                  <p> Gender</p>
                  <select name={data.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Transgender">Transgender</option>
                    <option value="Rather Not Say">Rather Not Say</option>
                  </select>

                  {/* <p className="gendar">{data.gender}</p> */}
                </div>
                <div>
                  <p>Counter</p>
                  <p className="country">{data.country}</p>
                </div>
              </div>
              <div className="description">
                <p>Description</p>
                <p>{data.description}</p>
              </div>
              <div className="icons">
                <RiDeleteBin6Line
                  className="delete"
                  onClick={() => deleteCelebrity(data.id)}
                />
                <MdOutlineEdit className="edit" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CelebretiesData;
