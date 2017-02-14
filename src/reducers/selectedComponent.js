import { hasChildSelected } from '../components/helperFunctions'

/**
 * A REDUCER handling selectedComponent in the store, changed when:
 *			component is selected (Components panel)
 * 			component or ancestor is toggled (Components panel)
 */

const selectedComponent = (state = "", action) => {
	switch(action.type) {
		case 'SELECT_COMPONENT':
			return action.id
		case 'TOGGLE_COMPONENT':
			if (hasChildSelected(action.id, action.components, state)) return action.id;
			else return state;
		case 'ADD_NEW_COMPONENT':
			if (action.componentType === "Form") return action.Uuid;
			else return state;
		case 'SELECT_SCREEN':
			return action.id
		case 'DELETE_COMPONENT':
			return "0";
		default:
			return state
	}
}
export default selectedComponent