/*
  manages light/dark mode.
*/

{
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "true";

  const onLoad = () => {
    // update toggle button to match loaded mode
    document.querySelector(".light-toggle").checked = // dark-toggle
      document.documentElement.dataset.dark === "false";
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
    window.localStorage.setItem("dark-mode", value);
  };
}
