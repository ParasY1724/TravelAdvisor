import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    bl_longitude: '108.473209',
    tr_longitude: '109.149359',
    tr_latitude: '12.838442',
  },
  headers: {
    // 'X-RapidAPI-Key': '1dc3581a84mshdcf979fd41a22a8p1bcc2ajsnd841021890c1',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


export const getPlacesData = async () => {
    try{
        const {data : {data}} = await axios.get(URL,options);
        return data;
    } catch (error){
        console.log("ERROR");
    }
}