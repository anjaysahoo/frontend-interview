import handleSearchUtil from "./src/utils/handle-search.util.js";

const searchInput = document.getElementById("search-input");
const resultContainer = document.getElementById("result-container");

searchInput.addEventListener("input", (event) => {
    const prefix = event.target.value;


    if(prefix === ""){
        console.log("prefix", prefix);
        resultContainer.innerHTML = "";
    }
    else{
        handleSearchUtil(prefix);
    }
})
