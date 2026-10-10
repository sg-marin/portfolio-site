import {
  arrayWorkLink,
  arrayWorkDetail,
  arrayLabel,
  arryaTag,
} from "./data.js";

const params = new URLSearchParams(location.search);
const getId = Number(params.get("id"));

const work = arrayWorkDetail.find((workList) => workList.id === getId);

const tag = work.value
  .map((value) => {
    const tag = arryaTag.find((tag) => tag.value === value);
    return `<span>${tag.tagName}</span>`;
  })
  .join("");

const label = arrayLabel.find(
  (labelList) => labelList.number === work.number,
).labelName;

const workList = arrayWorkLink.find((workLink) => workLink.id === getId);
const alt = workList.alt ?? "";

const url = document.getElementById("url");

if (work.url) {
  url.href = work.url;
  url.textContent = work.url;
} else {
  url.textContent = work.url;
  url.style.visibility = "hidden";
}

const mediaList = document.getElementById("work-media-list");

if (work.contents && work.contents.length > 0) {
  mediaList.innerHTML = work.contents
    .map((content) => {
      let media = "";

      // 動画の場合
      if (content.type === "movie") {
        media = `
          <iframe
              src="${content.src}"
              title="${content.title || work.title}"
              class="${content.type}"
              allowfullscreen
            ></iframe>
          `;
        // 動画以外の場合
      } else if (content.type !== "movie") {
        media = `
          <img src="${content.src}" alt="${content.alt || ""}" class="${content.type}">
        `;
      }
      return `
    <div class="work-media-item">
      ${content.label ? `<p>${content.label}</p>` : ""}
      ${media}
    </div>
  `;
    })
    .join("");
} else {
  mediaList.style.display = "none";
}

document.getElementById("tag").innerHTML = tag;
document.getElementById("label").textContent = label;
document.getElementById("title").textContent = work.title;

document.getElementById("target").textContent = work.target;
document.getElementById("purpose").textContent = work.purpose;
document.getElementById("point").innerHTML = work.point;
document.getElementById("time").textContent = work.time;
document.getElementById("size").textContent = work.size;
document.getElementById("tool").textContent = work.tool;

document.getElementById("work-img").src = work.link;
document.getElementById("work-img").alt = alt;
