const innerScrollerItemsChildren = document.querySelectorAll("#scroller-inner__items > *");
const innerScrollerItemsParent = document.querySelector("#scroller-inner__items");
const playPauseControl = document.querySelector("#scroller-inner__controls__play-pause");

innerScrollerItemsChildren.forEach(child => {
    const clonedChild = child.cloneNode(true);
    innerScrollerItemsParent.appendChild(clonedChild);
});

playPauseControl.addEventListener('click', toggleAnimationState)

function toggleAnimationState() {
    let animationState = innerScrollerItemsParent.style['animationPlayState'];

    if (animationState === 'paused') {
        innerScrollerItemsParent.style['animationPlayState'] = 'running';
        return;
    }

    innerScrollerItemsParent.style['animationPlayState'] = 'paused';
}