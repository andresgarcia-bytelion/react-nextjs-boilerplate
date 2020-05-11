import { action } from 'easy-peasy'

const mobileNavModel = {
	open: false,
	toggle: action((state) => {
		state.open = !state.open
	})
};

export default mobileNavModel