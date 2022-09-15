let linkProviders = document.getElementsByClassName("linkSource");

const linkHelper = function(event){

    let element = event.target;
    let link = element.getAttribute("data-link");
    if (link == null){
        do {
            element = element.parentNode;
        }
        while ((element.nodeName.toLowerCase() != "div") || (element.getAttribute("class") != "project linkSource"));
    }
    link = element.getAttribute("data-link");
    window.location.href = link 
}

for (let item of linkProviders){
    item.addEventListener('click', linkHelper, false);
}