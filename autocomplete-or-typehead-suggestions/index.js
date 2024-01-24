import handleSearchUtil from "./src/utils/handle-search.util.js";
import debounceUtil from "./src/utils/debounce.util.js";

const searchInput = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");

searchInput.addEventListener("input", debounceUtil((event) => {
    const prefix = event.target.value;

    if(prefix === ""){
        console.log("prefix", prefix);
        resultContainer.innerHTML = "";
    }
    else{
        handleSearchUtil(prefix);
    }
}, 500))
