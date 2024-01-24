import getGadgets from "../services/get-gadgets.service.js";

const resultContainer = document.getElementById("result-container");
const searchInput = document.getElementById("search-input");


const handleSearchUtil = (prefix) => {
    getGadgets(prefix).then(
        (res) => {
            resultContainer.innerHTML = "";
            res.forEach((element) => {
                const div = document.createElement("div");
                div.classList.add("body__results__result");
                div.innerText = element;
                resultContainer.appendChild(div);

                div.addEventListener("click", () => {
                    searchInput.value = element;
                    resultContainer.innerHTML = "";
                })
            });
        }
    )
}

export default handleSearchUtil;
