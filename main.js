const textarea = document.getElementById("textarea");

function f1(e) {
  let value = e.value;
  textarea.style.fontSize = value + "px";
}
function f2(e) {
  if (textarea.style.fontWeight == "bold") {
    textarea.style.fontWeight = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontWeight = "bold";
    e.classList.add("active");
  }
}
function f3(e) {
  if (textarea.style.fontStyle == " italic") {
    textarea.style.fontStyle = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.fontStyle = "italic";
    e.classList.add("active");
  }
}
function f4(e) {
  if (textarea.style.textDecoration == " underline") {
    textarea.style.textDecoration = "normal";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = " underline";
    e.classList.add("active");
  }
}
function f5(e) {
  if (textarea.style.textAlign == "left") {
    textarea.style.textAlign = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textAlign = "left";
    e.classList.add("active");
  }
}
function f6(e) {
  if (textarea.style.textAlign == "center") {
    textarea.style.textAlign = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textAlign = "center";
    e.classList.add("active");
  }
}
function f7(e) {
  if (textarea.style.textAlign == "right") {
    textarea.style.textAlign = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textAlign = "right";
    e.classList.add("active");
  }
}
function f8(e) {
  if (textarea.style.textTransform == "uppercase") {
    textarea.style.textTransform = "lowercase";
    e.classList.remove("active");
  } else {
    textarea.style.textTransform = "uppercase";
    e.classList.add("active");
  }
}
function f9(e) {
  if (textarea.style.textDecoration == "line-through") {
    textarea.style.textDecoration = "none";
    e.classList.remove("active");
  } else {
    textarea.style.textDecoration = "line-through";
    e.classList.add("active");
  }
}

function changeTextColor(e) {
  // console.log(e.value);
  textarea.style.color = e.value;
  textarea.style.placeholderColor = e.value;
}
