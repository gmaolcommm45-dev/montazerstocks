document.querySelector("button").addEventListener("click", () => {
  const search = document.getElementById("search").value;

  if (search.trim() === "") {
    alert("اكتب اسم السهم أولاً");
  } else {
    alert("البحث عن: " + search);
  }
});
