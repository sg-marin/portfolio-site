import {
  arrayWorkDetail,
  arrayWorkLink,
  arrayLabel,
  arryaTag,
} from "./data.js";

function myFunction() {
  const ulElement = document.getElementById("work-list");

  ulElement.innerHTML = arrayWorkDetail
    .map((workList) => {
      const label = arrayLabel.find(
        (labelList) => labelList.number === workList.number,
      );
      const labelName = label ? label.labelName : "";

      const tagName = workList.value
        .map((value) => {
          const tag = arryaTag.find((tag) => tag.value === value);
          return `<span>${tag.tagName}</span>`;
        })
        .join("");

      const workLink = arrayWorkLink.find(
        (linkList) => linkList.id === workList.id,
      );
      const link = workLink ? workLink.link : "";
      const alt = workLink ? workLink.alt : "";

      const labelColor = workList.number === 1 ? "label-orange" : "label-blue";

      return `
        <li>
            <a href="./workDetail.html?id=${workList.id}">
                <img src="${link}" alt="${alt}">
                <div class="annotation">
                    <p class="label ${labelColor}">${labelName}</p>
                    <p class="tag">${tagName}</p>
                </div>
                <h3>${workList.title}</h3>
            </a>
        </li>
        `;
    })
    .join("");
}

function clickBtnCategory(slectCategory) {
  const ulElement = document.getElementById("work-list");

  const category = slectCategory ?? "all";
  let slectWorkList = arrayWorkDetail;

  if (category !== "all") {
    slectWorkList = arrayWorkDetail.filter((workList) =>
      workList.value.find((value) => value === category),
    );
  }

  ulElement.innerHTML = slectWorkList
    .map((workList) => {
      const label = arrayLabel.find(
        (labelList) => labelList.number === workList.number,
      );
      const labelName = label ? label.labelName : "";

      const tagName = workList.value
        .map((value) => {
          const tag = arryaTag.find((tag) => tag.value === value);
          return `<span>${tag.tagName}</span>`;
        })
        .join("");

      const workLink = arrayWorkLink.find(
        (linkList) => linkList.id === workList.id,
      );
      const link = workLink ? workLink.link : "";
      const alt = workLink ? workLink.alt : "";

      const labelColor = workList.number === 1 ? "label-orange" : "label-blue";

      return `
        <li>
            <a href="./workDetail.html?id=${workList.id}">
                <img src="${link}" alt="${alt}">
                <div class="annotation">
                    <p class="label ${labelColor}">${labelName}</p>
                    <p class="tag">${tagName}</p>
                </div>
                <h3>${workList.title}</h3>
            </a>
        </li>
        `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  myFunction();
});

// 一致する要素を「全部」取得
const categoryButtons = document.querySelectorAll(".category-btn button");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    clickBtnCategory(category);
  });
});
