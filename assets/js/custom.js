function checkAndApplyClass() {
  const beginningNav = document.getElementById("beginning-nav");
  const storyNav = document.getElementById("story-nav");
  const endNav = document.getElementById("end-nav");

  if (
    !beginningNav.classList.contains("active") ||
    !endNav.classList.contains("active")
  ) {
    storyNav.classList.add("active");
  }

  if (
    beginningNav.classList.contains("active") ||
    endNav.classList.contains("active")
  ) {
    storyNav.classList.remove("active");
  }
}

// Call the function at regular intervals (e.g., every 1000 milliseconds)
setInterval(checkAndApplyClass, 100);