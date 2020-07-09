/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

// ---- Types ----

export const GATHER_VILLAGE = "GATHER_VILLAGE";
export const GATHER_VILLAGE_SUCCESS = "GATHER_VILLAGE_SUCCESS";
export const GATHER_VILLAGE_FAILURE = "GATHER_VILLAGE_FAILURE";

export const ADD_VILLAGER = "ADD_VILLAGER";
export const ADD_VILLAGER_SUCCESS = "ADD_VILLAGER_SUCCESS";
export const ADD_VILLAGER_FAILURE = "ADD_VILLAGER_FAILURE";

// ---- Action creators -----

export const gatherVillage = () => dispatch => {
	dispatch({ type: GATHER_VILLAGE });
	fetch("http://localhost:3333/smurfs")
		.then(res => res.json())
		.then(smurfs => {
			dispatch({
				type: GATHER_VILLAGE_SUCCESS,
				payload: smurfs,
			});
		})
		.catch(err => {
			dispatch({
				type: GATHER_VILLAGE_FAILURE,
				payload: err,
			});
		});
};

export const addVillager = smurf => dispatch => {
	dispatch({ type: ADD_VILLAGER });
	fetch("http:///localhost:3333/smurfs", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(smurf),
	})
		.then(res => res.json())
		.then(smurfs => {
			dispatch({
				type: ADD_VILLAGER_SUCCESS,
				payload: smurfs,
			});
		})
		.catch(err => {
			dispatch({
				type: ADD_VILLAGER_FAILURE,
				payload: err,
			});
		});
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
