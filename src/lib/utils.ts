// Check if the link is external
// ! Double check this code
export const isExternal = (url: string) => {
	try {
		let link = new URL(url, window.location.origin);
		return link.origin !== window.location.origin;
	} catch (e) {
		return false;
	}
};
