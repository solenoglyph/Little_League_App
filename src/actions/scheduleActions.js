import {url} from '../Url.js';


export const fetchGames = () => {
        return (dispatch) => {
            dispatch({ type: 'LOADING_GAMES'})

            fetch(url + "games", {withCredentials: true}).then(response =>
        {
            return response.json()
        }).then(responseJSON => {
            dispatch({type: 'ADD_GAMES', games: responseJSON})  
        })
    }
}



 export const addGame = (formData) => {
     
     return (dispatch) => {
     fetch(url + "games", {withCredentials: true},{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            
         },
         body: JSON.stringify({
             
                home_team_id: parseInt(formData.home_team), 
                away_team_id: parseInt(formData.away_team),
                date: formData.date,
                home_team_score: formData.home_team_score,
                away_team_score: formData.away_team_score
            
          
         })
     })
     .then(result => result.json())
     .then(responseJSON => {
            
            dispatch({type: 'ADD_GAME', game: responseJSON})
        

     })
    }
 }



 export const updateGame = (formData) => {
     
    return (dispatch) => {
    fetch(url + `games/${formData.game_id}`,{withCredentials: true},{
        method: "PATCH",
        headers: {
           "Content-Type": "application/json",
           
        },
        body: JSON.stringify({
            
               home_team_id: parseInt(formData.home_team), 
               away_team_id: parseInt(formData.away_team),
               date: formData.date,
               home_team_score: formData.home_team_score,
               away_team_score: formData.away_team_score
           
         
        })
    })
    .then(result => result.json())
    .then(responseJSON => {
        
           dispatch({type: 'UPDATE_GAME', game: responseJSON})
       

    })
   }
}

export const deleteGame = (id) => {
     
    return (dispatch) => {
        
    fetch(url + 'games/' + id, {withCredentials: true}, {
        method: "DELETE",
        // headers: {
        //    "Content-Type": "application/json",
           
        // },
    })
    // .then(result => result.json())
    .then(responseJSON => {
           
           dispatch({type: 'DELETE_GAME', game: id})
       

    })
   }
}

// dispatch({type: 'ADD_GAMES', games: responseJSON})