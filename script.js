const innerScrollerItemsChildren = document.querySelectorAll("#scroller-inner__items > *");
const innerScrollerItemsParent = document.querySelector("#scroller-inner__items");

innerScrollerItemsChildren.forEach(child => {
    const clonedChild = child.cloneNode(true);
    innerScrollerItemsParent.appendChild(clonedChild);
});