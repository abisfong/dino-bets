export default function stopBackgroundScroll(backgrounds) {
  backgrounds.forEach((background) => {
    background.stopScroll();
  });
}