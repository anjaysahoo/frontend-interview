import getGadgets from "../services/get-gadgets.service.js";

const resultContainer = document.getElementById("result-container");

const handleSearchUtil = (prefix) => {
    getGadgets(prefix).then(
        (res) => {
            resultContainer.innerHTML = "";
            res.forEach((element) => {
                const div = document.createElement("div");
                div.innerText = element;
                resultContainer.appendChild(div);
            });
        }
    )
}

export default handleSearchUtil;
