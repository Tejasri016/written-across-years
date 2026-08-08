export function turnPageTo(sectionId) {
  window.dispatchEvent(new Event("story:page-turn"));

  window.setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 650);
}