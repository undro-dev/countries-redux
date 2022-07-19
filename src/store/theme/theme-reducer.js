import { SET_THEME } from './them-actions';

export const themeReducer = (state = 'light', { type, payload }) => {
	switch (type) {
		case SET_THEME:
			return payload;
		default:
			return state;
	}
};
