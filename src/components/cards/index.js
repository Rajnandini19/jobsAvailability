import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Moment from 'react-moment';
import 'moment-timezone';
import { FaSearch } from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'

function Card() {

    const [jobs, setJobs] = useState([]);
    const [search,setSearch] = useState("");
    const [searchLocation,setSearchLocation] = useState("");
    const [check,setCheck] = useState("");
    
   
    const [visible, setVisible] = useState(9);
    
    
   

    useEffect(() => {
        axios.get('https://intern-fe-assign-backend.herokuapp.com/jobs')
          .then(res => {
              console.log(res)
              setJobs(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    },[])

    

    const showMoreItems = () => {
       setVisible(prevValue => prevValue +9);
    }

    function handleSelectFilter(option, checked) {
        if(checked){
          setFilter(option); // add option to filter array
          let filterArr = tableData.filter(row => row.color == option);
        }else{
          //if unchecked, remove from filterArr and unfilter the table
          let filterArr = tableData.filter(row => row.color !== option);
          setFilter(filterArr);
        }
      }
  
    return <CardInfo>
     <div className="app">
      <div className="header">
       <div className="container">
        <div className="inputCont">
         <form
          className="form"
          onSubmit={(e) => {
          e.persist();
          e.preventDefault();
        //   handleSubmit({});
          }}
         >
        <FaSearch className="searchicon"/>
        <input 
         
          type="text" 
          name="name"
          onChange ={(e) => setSearch(e.target.value)}
          className = "title" 
          placeholder="Filter by title, companies, expertise "
          
          />
        <MdLocationPin className="locationPin"/>
        <input 
          type="text" 
          name="name" 
          onChange = {(e) => setSearchLocation(e.target.value)}
          className = "location" 
          placeholder="Filter by location"

        />

        <label className="fullTime">
          <input 
            type="checkbox" 
            onChange = {(e) => setCheck(e.target.value)}
            />
          Full Time
        </label>
        <input type="submit" value="Search" className="button" />
         </form>
       </div>
      </div>
    </div>
    </div>
        
         <div className="row">
             <ul className = "collection">
                 {
                     jobs
                     .filter((value) => {
                         if(search===""){
                             return value
                         }
                         else if(value.jobTitle.toLowerCase().includes(search.toLowerCase()))
                         {
                             return value
                         }
                         else if(value.companyName.toLowerCase().includes(search.toLowerCase()))
                         {
                             return value
                         }

                    

                        
                     })
                     .filter((value1) => {
                          if(searchLocation===""){
                             return value1
                         }
                         else if(value1.country.toLowerCase().includes(searchLocation.toLowerCase()))
                         {
                             return value1
                         }
                      })

                     
                     
                     .slice(0,visible)
                     .map(job=>{

                         return (
                             <div className="column">
                                 <div className="Rect">
                                 <div className="cardContent">
                                     <img src={job.companyImage} className="companyImage"/>
                                     
                                     <h5 className="time"><Moment fromNow>{job.datePosted}</Moment>   .   {job.isFullTime==true?"Full Time" : "Part Time"}</h5>
                                     <h3 className="jobtitle">{job.jobTitle}</h3>
                                     <h5 className="companyName">{job.companyName}</h5>
                                     
                                     <h4 className="country">{job.country}</h4>
                                    
                                 </div>
                                 </div>
                             </div>
                         )
                     })
                 }
    
             </ul>
             <div className="buttondiv">
          <button  className="load" onClick={showMoreItems}>Load More</button>
         </div>
         </div>
        
        
         
     </CardInfo>
     
   
  
}

const CardInfo = styled.section`
.app {
  width: 100vw;
}
.header {
  background-image: url("../../scss/background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 150px;
 
}
.container {
  max-width: 80%;
  margin: auto;
  position: relative;
 
}

.inputCont {
  width: 100%;
  background-color:white;
  padding: 16px;
  position: absolute;
  bottom: -40px;
  border-radius:8px;
  
}
input:focus{
    outline: none;
}
.fullTime
{
    margin-right:2%;
}
.form {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${'' /* font-size: 16px; */}
  font-weight:bold;

}
.searchicon
{
    color:#707070;
    font-size:1.1rem;
}
.locationPin
{
    color: #5964e0;
    font-size:1.5rem;
}
.title
{
padding:10px;
width:35%;
border-width:0 1px 0 0;
border-color: #dddddd;
font-size:0.9rem;
}
.location
{
padding:10px;
width:35%;
border-width: 0;
font-size:0.9rem;
}
.button {
  background-color: #5964e0;
  padding: 16px;
  color:white;
  border: 0px;
  border-radius: 4px;
  width: 100px;
}


.load{
   ${'' /* position:absolute;
   left:48%;
   top:190%; */}
   margin-left:43%;
   margin-right:43%;
   width:140px;
   height:45px;
   background-color:#5964e0;
   border:none;
   color:white;
   font-weight:bold;
   align-content:center;
   font-size:1rem;
   border-radius:5%;
}
.row{
  align-content:center;
  margin-left:3%;
  ${'' /* margin-top:10%; */}
}

.column {
  float: left;
  width: 25%;
  margin-left:5%;

}
${'' /* .row:after {
  content: "";
  display: table;
  clear: both;
} */}

.Rect{
  position:relative;
  display:flex;
  ${'' /* justify-content:space-around;  */}
  align-content:left;
  height:200px;
  border-radius:3%;
  margin-bottom:20%;
  background:#fff;
}
.cardContent{
    
    h5{
        color:#BBBFCA;
        font-size:0.8rem;
    }
    h4
    {
        color:#5964e0;
    }
    h3
    {
        color:black;
        font-size:1rem;
        font-weight:bold;
    }
}
.time
{
  position:absolute;
  top:10%;
  left:7%;
}
.jobtitle
{
  position:absolute;
  top:25%;
  left:7%;
}
.companyName
{
  position:absolute;
  top:38%;
  left:7%;
}
.country
{
  position:absolute;
  top:65%;
  left:7%;
  font-size:0.8rem;
}
.companyImage{
    height:40px;
    width:40px;
    border-radius:25%;
    position:absolute;
    top:-10%;
    left:7%;
}

@media only screen and (max-width: 900px) {
    .row{
    align-content:center;
    margin-left:15%;
    margin-top:20%;
  }
  .column {
  float: left;
  width: 65%;
  margin-left:5%;
}

.load{
   ${'' /* position:absolute;
   left:48%;
   top:190%; */}
   margin-left:30%;
   margin-right:30%;
   width:140px;
   height:45px;
   background-color:#5964e0;
   border:none;
   color:white;
   font-weight:bold;
   align-content:center;
   font-size:1rem;
   border-radius:5%;
}
}
@media only screen and (max-width: 600px)
{
    .inputCont
    {
        bottom:-100px;
        margin-left:-6%;
    }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: $font-regular;
  
  }
  .title
{
padding:10px;
width:55%;
border-width:0 0 1px 0;
border-color: #dddddd;
font-size:0.9rem;
}
.location
{
padding:10px;
width:55%;
border-width:0 0 1px 0;
border-color: #dddddd;

font-size:0.9rem;
}
.searchicon
{
position:absolute;
top:15%;
left:16%;
}
.locationPin
{
    position:absolute;
top:35%;
left:16%;
}
.fullTime
{
   margin-top:5%;
   margin-left:-48%;
}
.button
{
    
  padding: 10px;
  color:white;
  border: 0px;
  border-radius: 4px;
  width: 100px;
  margin-top:5%;
}
}
@media (max-width: 480px)
{
    .row{
    align-content:center;
    margin-left:15%;
    margin-top:20%;
  }
  .column {
  float: left;
  width: 65%;
  margin-left:5%;

}

.load{
   ${'' /* position:absolute;
   left:48%;
   top:190%; */}
   margin-left:13%;
   margin-right:13%;
   width:140px;
   height:45px;
   background-color:#5964e0;
   border:none;
   color:white;
   font-weight:bold;
   align-content:center;
   font-size:1rem;
   border-radius:5%;
}
.Rect{
  position:relative;

  width:140%;
  margin-left:-12%;
 
  margin-bottom:7%;
  
  
}
}
`

export default Card;
