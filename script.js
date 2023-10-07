const innerScrollerItemsChildren = document.querySelectorAll("#scroller-inner__items > *");
const innerScrollerItemsParent = document.querySelector("#scroller-inner__items");
const playPauseControl = document.querySelector("#scroller-inner__controls__play-pause");

let isAnimationRunning = true;
let isSwiping = false;

let swipeStart = 0;
let currentTranslation = 0;

innerScrollerItemsChildren.forEach(child => {
    const clonedChild = child.cloneNode(true);
    innerScrollerItemsParent.appendChild(clonedChild);
});

playPauseControl.addEventListener('click', toggleAnimationState);

innerScrollerItemsParent.addEventListener('mousedown', startSwiping);
innerScrollerItemsParent.addEventListener('touchstart', startSwipingMobile);

window.addEventListener('mouseup', stopSwiping);
window.addEventListener('touchend', stopSwiping);

innerScrollerItemsParent.addEventListener('mousemove', (e) => {
    e.preventDefault();
    swipe(e);
});

innerScrollerItemsParent.addEventListener('touchmove', (e) => {
    e.preventDefault();
    swipeMobile(e);
});

function stopSwiping(e) {
    if (!isSwiping) return;
    swipeStart = currentTranslation;
    isSwiping = false;
}

function toggleAnimationState(e) {
    let animationState = innerScrollerItemsParent.style.animationPlayState;

    if (animationState === 'paused') {
        innerScrollerItemsParent.style.animationPlayState = 'running';
        setScrollerCursorType('initial')
        clearSwipingState();
        isAnimationRunning = true;
        return;
    }

    innerScrollerItemsParent.style.animationPlayState = 'paused';
    setScrollerCursorType('grab')
    isAnimationRunning = false;
}

function clearSwipingState() {
    innerScrollerItemsParent.style.transform = null;
    swipeStart = 0;
    currentTranslation = 0;
}

function setScrollerCursorType(type) {
    innerScrollerItemsParent.style.cursor = type;
}

function startSwiping(e) {
    if (isAnimationRunning || isSwiping) return;

    isSwiping = true;
    swipeStart = e.clientX - currentTranslation;
}

function startSwipingMobile(e) {
    if (isAnimationRunning || isSwiping) return;

    isSwiping = true;
    swipeStart = e.touches[0].clientX - currentTranslation;
}

function swipe(e) {
    if (!isSwiping) return;

    currentTranslation = e.clientX - swipeStart;
    innerScrollerItemsParent.style.transform = `translateX(${currentTranslation}px)`;
}

function swipeMobile(e) {
    if (!isSwiping) return;

    currentTranslation = e.touches[0].clientX - swipeStart;
    innerScrollerItemsParent.style.transform = `translateX(${currentTranslation}px)`;
}