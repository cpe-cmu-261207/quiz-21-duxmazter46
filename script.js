async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  document.getElementById("div-user-card").style.display = "";

  document.getElementById("img-profile").src =
    resp.data.results[0].picture.large;
  document.getElementById("p-name").innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  document.getElementById("p-email").innerText = resp.data.results[0].email;
  document.getElementById("p-address").innerText = resp.results[0].city;
}

callApi();

document.getElementById("btn-random").onclick = () => {};
