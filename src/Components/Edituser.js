
const Edit = ({ val, data, setData, setShow, getData }) => {

  const handleInput = (e) => {
    const newList = data.map((li) =>
      li.id === val.id ? { ...li, [e.target.name]: e.target.value } : li,
    );
    setData(newList);
    console.log(newList);
   
  };

  const handleSubmit = async (e) => {
    console.log(val);
    fetch(`http://localhost:3001/user/update/`+ val.id ,{
      method: 'PUT',
      body: JSON.stringify(val),
      headers: {
        'Content-type': 'application/json;charset=UTF-8',
      },
    }).then((result) => {
      result.json().then((res) => {
        setShow(e => !e);
        console.log(res);
        getData();
      });
    });
  };

  return (
    <tr key={val.id}>
      <td><input disabled="disabled" value={val.id}></input></td>
      <td>
        <input
          type="text"
          name="email"
          value={val.email}
          onChange={handleInput}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="phone"
          value={val.phone}
          onChange={handleInput}
        ></input>
      </td>
      <td>
        <input
          type="text"
          name="username"
          value={val.username}
          onChange={handleInput}
        ></input>
      </td>
      <td>
        <button onClick={(e) => handleSubmit(e)} >update</button>
      </td>
    </tr>
  );
};

export { Edit };