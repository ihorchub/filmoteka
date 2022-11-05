import ApiServise from "./js/API";
import { onSubmit } from "./js/onSubmit";

const refs = {
    searchForm: document.querySelector('.home-header__form')
}

const apiServise = new ApiServise();

refs.searchForm.addEventListener("submit", onSubmit)

apiServise.fetchDefault().then(
    
    // marcap
    
);

