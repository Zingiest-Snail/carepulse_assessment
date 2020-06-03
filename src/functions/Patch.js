import axios from 'axios';

//Sends patch request to server
export function patchData(id,newR,newN){
      const data = {
          beds:{
              Residential:newR,
              Nursing:newN
          }
      }
      console.log(data)
      axios.patch('https://cors-anywhere.herokuapp.com/https://skills-assessment.herokuapp.com/api/skills_assessment/'+id,data)
        .then((res) => {
          console.log(res);
      })
        .catch((err) => {
          console.log(err);
      })
  }