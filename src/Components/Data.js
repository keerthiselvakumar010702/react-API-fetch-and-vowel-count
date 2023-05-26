import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Data.css";
import { useNavigate } from "react-router-dom";
import { Edit } from "./Edituser";

function Data() {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [userId, setUserId] = useState(null);
  const [show, setShow] = useState(false);

  const getData = async () => {
    const reqdata = await fetch("http://localhost:3001/user/readall");
    const resdata = await reqdata.json();
    setData(resdata);
    console.log(resdata);
  };
  useEffect(() => {
    getData();
  }, [message]);
  const editUser = (id) => {
    setShow((e) => !e);
    setUserId(id);
  };

  const handleDelete = async (id) => {
    let res = fetch("http://localhost:3001/user/delete/" + id, {
      method: "DELETE",
      HEADERS: { "content-type": "application-json" },
    });
    let resjson = await (await res).json();
    if (res.status === 200) {
      setMessage(resjson.success);
      setTimeout(() => {
        navigate("/");
        setMessage("");
      }, 2000);
    } else {
      setMessage("please check data");
    }
  };
  return (
    <div className="main">
      <div className="sub">
        <center>
          <h1>USER DETAILS</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>USERNAME</th>
                <th>ACTION</th>
              </tr>
            </thead>

            <tbody>
              {data.map((val, index) =>
                show && userId === val.id ? (
                  <Edit
                    val={val}
                    data={data}
                    setData={setData}
                    getData={getData}
                    show={show}
                    setShow={setShow}
                  />
                ) : (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.email}</td>
                    <td>{val.phone}</td>
                    <td>{val.username}</td>
                    <td>
                      <button onClick={() => editUser(val.id)}>EDIT</button>
                      <a href="#popup1">
                        {" "}
                        <button class="button" className="del-button">
                          Delete
                        </button>
                      </a>
                      <div id="popup1" class="overlay">
                        <div class="popup">
                          <h2>ALERT</h2>
                          <a class="close" href="#">
                            &times;
                          </a>
                          <div class="content">
                            Are you sure you want to delete this user?
                            <br />
                            <button
                              type="button"
                              className="edit-button"
                              onClick={() => handleDelete(val.id)}
                            >
                              Yes
                            </button>
                            <button type="button" className="edit-button">
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </center>
      </div>
    </div>
  );
}

export { Data };
