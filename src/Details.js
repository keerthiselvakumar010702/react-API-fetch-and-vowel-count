 import './Details.css';
// import Location from './Location';
// import Phone from './Phone';

const Details = ({ userData }) => {
    return (
        <>
        <div className="box">
      <ul>     
            <div className="box__title"><h2>{userData.id}. {userData.name}</h2></div>
           <div className="box_content">
        <ul type="none">
                <div className='left'>
              <li> <b>USERNAME:</b> {userData.username}</li>
               <strong> ADDRESS:</strong>
            <div className='sub'>
            <li>  <b> STREET: </b> {userData.address.street}</li>
            <li>   <b> CITY:</b> {userData.address.city}</li>
            <li>  <b> ZIPCODE:</b> {userData.address.zipcode}</li>
              </div>
              </div>
              <div className='right'>
              <li>  <b> EMAIL:</b>  {userData.email}</li>
              <li> <b> PHONE:</b>{userData.phone}</li>
              <li>  <b> WEBSITE:</b>{userData.website}</li>
 
               <div className='sub'>
               <li>  <b>COMPANY NAME:</b> {userData.company.name}</li>
               <li>   <b> BS:</b>{userData.company.bs}</li>
               </div>
               </div>
               </ul>
           </div>
           
            {/* <div className="card__body">
                <Location location={userData.location}/>
                <Phone number={userData.phone} type="Home"/>
                <Phone number={userData.cell} type="Cell"/>
                <div className="card__image"><img src={userData.picture.medium}/></div>
            </div> */}
        </ul>
        </div></>
    )
};

export { Details};