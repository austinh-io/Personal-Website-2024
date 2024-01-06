import type { PageLoad } from './$types';
import { fetchPlaceholderData } from './api/fetchPlaceHolderData';

export const load = (async ({ fetch }) => {
	const placeHolderData = await fetchPlaceholderData(fetch);

	return {
		props: {
			placeHolderData
		}
	};
}) satisfies PageLoad;
