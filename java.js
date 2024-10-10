function change() {
    //header
    const header = document.getElementsByTagNamee("h2").item(0);
    header.firstChild.data = "This is my dynamic content";

    //paragraph
    const para = document.getElementsByTagName("p").item(0);
    para.firstChild.data = "This is also dynamic content";

    const newText = document.createTextNode("This is more dynamic context");
    const newElement = document.createElement("p");
    newElement.appendChild(newText);

}