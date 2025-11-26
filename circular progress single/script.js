function setProgress(percent, labelText) {
  const numberEl = document.getElementById("number");
  const circle = document.querySelector("circle");
  const labelEl = document.getElementById("skill-label");

  // Update text
  numberEl.innerText = percent + "%";
  labelEl.innerText = labelText;

  // Circle math
  const radius = circle.r.baseVal.value; // 70px
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

// Example usage: show only one progress at a time
setProgress(65, "HTML");
