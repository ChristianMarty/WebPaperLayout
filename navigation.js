function addSidebar() {
    let index = 1;
    let headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6, h7, h8, h9 ,h10");
    let navigation = document.getElementsByClassName("wpl_navigation")[0];

    headers.forEach(element => {
        let indent =  element.tagName.replace("H","")-1;
        indent = indent*20;

        element.id = 'nav-'+index;
        navigation.innerHTML += '<div style="text-indent:'+indent+'px"><a href="#nav-'+index+'" class="wpl_navigation">'+element.innerText+'</a><br></div>';
        index++;
    });
};
window.onload = addSidebar;
