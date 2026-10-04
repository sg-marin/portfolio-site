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

document.getElementById("tag").innerHTML = tag;
document.getElementById("label").textContent = label;
document.getElementById("title").textContent = work.title;

document.getElementById("target").textContent = work.target;
document.getElementById("purpose").textContent = work.purpose;
document.getElementById("point").textContent = work.point;
document.getElementById("time").textContent = work.time;
document.getElementById("size").textContent = work.size;
document.getElementById("tool").textContent = work.tool;

document.getElementById("work-img").src = work.link;
document.getElementById("work-img").alt = alt;
