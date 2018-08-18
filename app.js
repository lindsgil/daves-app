var isImageShowing = false;

function onMenuClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("checkmark-image");
  var w = document.getElementById("wrong-image");
  var a = document.getElementById("one-image");
  var b = document.getElementById("two-image");
  var c = document.getElementById("three-image");
  var d = document.getElementById("q-image");

  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    w.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
  } else {
    x.style.display = "none"
  }
}

function onCorrectClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("checkmark-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function onInCorrectClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("wrong-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function onOneClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("one-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function onTwoClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("two-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function onThreeClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("three-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}

function onQClick() {
  var x = document.getElementById("container");
  var y = document.getElementById("q-image");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "block";
  }
}
