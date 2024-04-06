var artical = [
    {
        link: "https://bkstudio.hatmic.top",
        author: "BKStudio"
    }, 
    {
        link: "https://coppist.github.io", 
        author: "Coppist"
    }, 
    {
        link: "https://tolazyer.gitee.io/artwaves",
        author: "Artwaves"
    }
];

var targ = "_blank";

var container = document.getElementById("artical");

artical.forEach(function (arti) {
    var html = `
        <p><a href="${arti.link}" target="${targ}">${arti.author}</a></p>
    `;

    container.innerHTML += html;
});