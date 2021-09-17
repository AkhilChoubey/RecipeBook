import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';

import { useHistory } from 'react-router';


function FinalNav(props){

    const history = useHistory(); 

    const [find, setFind] = useState(null);
    const [rest, setRes] = useState(null);

    function handleChange(e){
        let val = e.target.value;
        setRes(val);
    }

    function handleFind(e){
        //<Search key="1" imgsrc={} title={} recipe={} time={} />
        let result = rest;
        fetch(`https://api.spoonacular.com/recipes/complexSearch?number=6&apiKey=${REACT_APP_API_KEY}&maxFat=25&maxCalories=2000&query=${result}`)
        .then(response => response.json())
        .then((data)=>{
           // console.log(data)
            history.push({
                pathname: '/search',
                state: {details: data}
        });
        })
        .catch((e)=> console.log(e))  
    }

  

    return <>
    <div className="container-fluid nav_bg" >
        <div className="row" >
            <div className="col-10 " style={{marginTop: "1%" , width:"100%"}}>
 
           
        <nav className='navbar navbar-expand-lg navbar-light bg-light' style={{borderRadius: "41px"}}>
        <div className="container-fluid">
           <Link to='/' className='navbar-brand'> Welcome, {props.title}! </Link>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
           <div className="collapse navbar-collapse nav-final" id="navbarSupportedContent" >
           <form className="d-flex search">
        <input name="valData" onChange={handleChange} className="form-control me-2" type="search" placeholder="Search recipes" aria-label="Search" style={{width: "17rem", borderRadius: "25px",background: 'white'}} />
        <a type="submit" onClick={handleFind} style={{paddingLeft: "4px" ,fontSize: "23px"}}><BsSearch /></a>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
           <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/top' activeclassname="menu-active" className="nav-link">Top</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/healthy' activeclassname="menu-active" className="nav-link">Healthy</Link><span></span></li>
                {/* <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/about' activeclassName="menu-active" className="nav-link">About</Link><span></span></li> */}
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/contact2' activeclassname="menu-active" className="nav-link">Contact</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/meal' activeclassname="menu-active" className="nav-link">MealMaker</Link><span></span></li>
                <li className='nav-item menuitem' style={{marginRight: "30px"}}><Link to='/' activeclassname="menu-active" className="nav-link">Log out</Link><span></span></li>

            </ul>
            </div>
            {/* <span className="slide"></span> */}
            </div>
        </nav>
        </div>
        </div>
    </div>
    </>
}



export default FinalNav;