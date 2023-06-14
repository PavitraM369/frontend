import React, { useEffect } from "react";
import "./style.css";
import { useState, useContext } from "react";
import { globalContext } from "../../App";

function Tableview(props) {
  const EditImage = require("../../assets/icons/Edit.png");
  const DeleteImage = require("../../assets/icons/Delete.png");
  const QrCode = require("../../assets/icons/qrcode.png");
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/assets/allassets");
        const jsonData = await response.json();
        console.log(jsonData);
        setdata(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const { Data } = useContext(globalContext);

  return (
    <div>
      <div className="col-sm-10 mx-auto">
        <table className="table mt-5">
          <thead>
            <tr className="col">
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Model</th>
              <th>Assigned To</th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {data.assets ? (
              data.assets.map((item) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img
                          src="https://picsum.photos/200/300?grayscale"
                          alt="edit"
                          className="itemimage"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.type}</td>
                      <td>{item.model}</td>
                      <td>{item.assignedto}</td>
                      <td>
                        <img
                          src={EditImage}
                          alt="edit"
                          className="icon cursor-pointer"
                        />
                        <img
                          src={DeleteImage}
                          alt="Delete"
                          className="icon cursor-pointer"
                        />
                        <img
                          src={QrCode}
                          alt="QR"
                          className="icon cursor-pointer"
                        />
                      </td>
                    </tr>
                  </>
                );
              })
            ) : (
              <h1>Loading....</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tableview;
