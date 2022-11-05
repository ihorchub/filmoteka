import ApiServise from "./API";

const apiServise = new ApiServise();

export function onSubmit(e) {
      e.preventDefault();
    apiServise.query = e.target.elements[0].value.trim();
    apiServise.fetch().then(console.log)
}