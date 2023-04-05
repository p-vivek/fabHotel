import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setLocation,setHotels,setEmpty } from "../Redux/actions/placeAction";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';



const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }
  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function SearchField() {
const [query, setQuery] = useState("");
const locations = useSelector(state=>state.places.locations);
const hotels = useSelector(state=>state.places.hotels);
const dispatch = useDispatch();


  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery)
    );

    function handleScriptLoad(){
        const displaySuggestions = function (predictions, status) {
          if (status !== window.google.maps.places.PlacesServiceStatus.OK || !predictions) {
            return;
          }
          dispatch(setLocation(predictions));
        };
        const service = new window.google.maps.places.AutocompleteService();
        service.getQueryPredictions({ input:query }, displaySuggestions);
      }
      
      dispatch(setHotels([{name:"FabHotel New Place, Noida, Uttar Pradesh, India"},{
        name:"FabHotel Pallavi New Delhi Station, Delhi, India"
      }]));

  
      if(query === ""){
        dispatch(setEmpty())
      }

    }, [query,dispatch]);
    
  return (<>
 
     
   <section className="container">
      <div className="search-bar">
        <input type="text" placeholder='search hotel' name="search" className="inputEl" onChange={event => setQuery(event.target.value)}  value={query}/>
        <button type="submit">
       <SearchOutlinedIcon className='btn'style={{fontSize:40,color:"white"}}/> 
        </button>
      </div>
      <div className="display-box">
      <ul className="display-box--location" data-testid="location">
              {
                  locations.map((el)=>{
                      if(query!== ""){
                      return (
                        <>
                          <li data-testid="locLi" className="locationLi"><LocationOnOutlinedIcon style={{fontSize:30,color:"white"}}/><span>{el.description}</span></li>
                        </>
                      )
                      }
                      else return null
                  })
              }
            </ul>
      <ul className="display-box--hotel" data-testid="hotel">
              {
                  hotels.map((el)=>{
                      if(query === "new")
                      return (<>
                          <li data-testid="HolLi" className="hotelLi"><CorporateFareOutlinedIcon style={{fontSize:30,color:"white"}}/><span>{el.name}</span></li>
                      </>
                      )
                  else return null
                  })
              }
            </ul>
            
      </div>
      
    </section> 
      
   
   
  </>
  );
}
export default SearchField;
