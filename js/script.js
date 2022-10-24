const progress = document.querySelector(".progress-bar")

 /*window.addEventListener('scroll', () => {
    const windowScroll = window.pageYOffset
    const height = document.documentElement.scrollHeight
    const scrolled = (windowScroll / height) *106;
    progress.style.width = `${scrolled}%`
}) */

// the belw dode is good way for thi project.
window.addEventListener('scroll', () => {
    const windowScroll = window.pageYOffset
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (windowScroll / height) *100;
    progress.style.width = `${scrolled}%`
})