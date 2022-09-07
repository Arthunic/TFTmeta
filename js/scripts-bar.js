// ------ progress bar ------
(function () {
    const bar = document.createElement("div");
    const progress = document.createElement("div");

    bar.classList.add("background-bar");
    progress.classList.add("progress-bar");

    document.body.appendChild(bar).appendChild(progress);

    window.addEventListener('scroll', () => {
        let progress_bar = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        progress.style.width = `${progress_bar}%`;
    });

    bar.addEventListener('click', (e) => {
        let setPosition = (document.documentElement.scrollHeight- document.documentElement.clientHeight) * (e.clientX / window.innerWidth);
        window.scrollTo(0, setPosition.toFixed(0));
    });
})();

