import axios from "axios";

const refreshMedia = async () => {
  try {
    const htmlString = await axios.get(
      "https://www.instagram.com/holy.molly.guacamolly"
    );
    let parser = new DOMParser();
    const htmlDom = parser.parseFromString(htmlString.data, "text/html");
    const scriptArr = htmlDom.querySelectorAll("script");
    const mediaStr = scriptArr[4].innerText;
    const mediaJson = JSON.parse(mediaStr.substr(21, mediaStr.length - 22));
    const mediaArr =
      mediaJson.entry_data.ProfilePage[0].graphql.user
        .edge_owner_to_timeline_media.edges;
    localStorage.setItem("ig_media", JSON.stringify(mediaArr));
    const expDate = new Date().getTime() + 1800000;
    localStorage.setItem("ig_expDate", expDate);
    return mediaArr;
  } catch (err) {
    alert("Unexpected error fetching IG");
    window.location.reload(true);
  }
};

const openGallery = async () => {
  localStorage.setItem("igMedia_ready", false);
  const NOW = new Date().getTime();
  const expDate = localStorage.getItem("ig_expDate") || 0;
  if (expDate < NOW) {
    await refreshMedia();
  }
  localStorage.setItem("igMedia_ready", true);
};

export { openGallery };
