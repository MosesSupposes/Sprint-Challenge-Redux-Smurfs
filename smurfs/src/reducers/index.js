/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GATHER_VILLAGE,
  GATHER_VILLAGE_SUCCESS,
  GATHER_VILLAGE_FAILURE,
  ADD_VILLAGER,
  ADD_VILLAGER_SUCCESS,
  ADD_VILLAGER_FAILURE
} from '../actions'

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default function smurfsReducer(state=initialState, action) {
  switch(action.type) {
    // GET requests
    case GATHER_VILLAGE:
      return {
        ...state,
        fetchingSmurfs: true
      }
    case GATHER_VILLAGE_SUCCESS: 
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: state.smurfs.concat(action.payload)
      }
    case GATHER_VILLAGE_FAILURE: 
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }

    // POST requests
    case ADD_VILLAGER:
      return {
        ...state,
        addingSmurf: true,
      }
    case ADD_VILLAGER_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: state.smurfs.concat(action.payload)
      }
    case ADD_VILLAGER_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
  }
}

