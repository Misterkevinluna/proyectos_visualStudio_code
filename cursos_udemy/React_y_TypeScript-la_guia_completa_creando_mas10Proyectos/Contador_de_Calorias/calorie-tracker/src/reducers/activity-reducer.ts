import type { Activity } from "../types/intex";

export type ActivityActions =
     { type: 'save-activity', payload: { newActivity: Activity } } |
     { type: 'edit-activity', payload: { id: Activity['id'] } } |
     { type: 'delete-activity', payload: { id: Activity['id'] } } |
     { type: 'restart-app' };


export type ActivityState = {
     activities: Activity[];
     activeId: Activity['id'];
};

const localStorageActivities = (): Activity[] => {
     const activities = localStorage.getItem('activities');
     return activities ? JSON.parse(activities) : [];
}

export const initialState: ActivityState = {
     activities: localStorageActivities(),
     activeId: ''
};

export const activityReducer = (
     state: ActivityState = initialState,
     action: ActivityActions
) => {
     if (action.type === 'save-activity') {
          let updatedActivities: Activity[];
          if (state.activeId) {
               //Iteramos con map cada Activity que contiene state.activities, cuando encontramos el id que coincide con el Activity que queremos editar lo que se hace es remplazar el Activity que ya estaba con el nuevo Activity que contiene nuevos valores.
               //De esta forma map nos devuelve un array con todo los Activity que ya teniamos junto con el nuevo Activity que sustituyo al Activity viejo que se encontraba en la posición en la que coincidia sus id.
               updatedActivities = state.activities.map(activity => activity.id === state.activeId
                    ? action.payload.newActivity : activity);
          } else {
               updatedActivities = [...state.activities, action.payload.newActivity];
          }

          return {
               ...state,
               activities: updatedActivities,
               activeId: ''
          }
     }

     if (action.type === 'edit-activity') {
          return {
               ...state,
               activeId: action.payload.id
          }
     }

     if (action.type === 'delete-activity') {
          return {
               ...state,
               activities: state.activities.filter(activity => activity.id !== action.payload.id)
          }
     }

     if (action.type === 'restart-app') {
          return {
               activities: [],
               activeId: ''
          }
     }

     return state;
};