export const useScroll = () => {
	function scrollTo(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	return { scrollTo, scrollToTop };
};
