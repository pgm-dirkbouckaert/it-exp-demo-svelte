import { posts } from '../../../lib/data.js';

export const load = ({ params }) => {
	return {
		post: posts.find((post) => post.id === +params.id)
	};
};
