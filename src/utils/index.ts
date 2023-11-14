export const scrollIntoViewWithOffset = (element: HTMLElement | null, offset: number) => {
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top:
          element.getBoundingClientRect().top -
          document.body.getBoundingClientRect().top -
          offset,
      });
    }
};