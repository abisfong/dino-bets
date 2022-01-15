export default function startBackgroundScroll(backgrounds) {
  backgrounds.forEach((background) => {
    background.scroll('left');
  });
}