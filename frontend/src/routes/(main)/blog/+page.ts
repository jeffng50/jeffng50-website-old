import { load_PostsInfo } from '$houdini';
import type { PageLoadEvent } from './$houdini';

/* @type { import('./$houdini').PageLoad } */
export const load = async (event: PageLoadEvent) => {
	return {
		...(await load_PostsInfo({
			event,
			variables: {
				page: event.url.searchParams.has('page') ? Number(event.url.searchParams.get('page')) : 1
			}
		}))
	};
};
