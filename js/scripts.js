// ------ progress bar ------
(function () {
    const bar = document.createElement("div");
    const progress = document.createElement("div");

    bar.classList.add("progress-bar");
    progress.classList.add("progress-bar_real-progress");

    document.body.appendChild(bar).appendChild(progress);

    window.addEventListener('scroll', (e) => {
        let progress_bar = window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
        progress.style.width = `${progress_bar}%`;
    });
})();

