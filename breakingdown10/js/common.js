document.addEventListener('DOMContentLoaded', function () {
    var contents = document.querySelectorAll('.contents_offer-box');
    var toggles = document.querySelectorAll('input[name="content-toggle"]');

    function hideAllContents() {
        contents.forEach(function (content) {
            content.style.display = 'none';
        });
    }

    function uncheckAllToggles() {
        toggles.forEach(function (toggle) {
            toggle.checked = false;
        });
    }

    toggles.forEach(function (toggle, index) {
        toggle.addEventListener('change', function () {
            if (this.checked) {
                hideAllContents();
                uncheckAllToggles();
                this.checked = true;
                contents[index].style.display = 'block';
                contents[index].scrollIntoView({ behavior: 'smooth' });
                // Wait for the smooth scroll to finish then adjust by 20px
                setTimeout(function () {
                    window.scrollBy(0, -20);
                }, 500); // Adjust the timeout as needed
            }
        });
    });
});

document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('active');
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + '100px';
        }
    });
});

const scorrllLinks = document.querySelectorAll('a[href^="#"]');
scorrllLinks.forEach((scorrllLink) => {
    scorrllLink.addEventListener('click', (e) => {
        e.preventDefault();
        const hrefLink = scorrllLink.getAttribute('href');
        const targetContent = document.getElementById(hrefLink.replace('#', ''));
        const rectTop = targetContent.getBoundingClientRect().top;
        const positionY = window.pageYOffset;
        const target = rectTop + positionY;
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var link = document.getElementById('content1-link');
    var content = document.getElementById('content1');

    link.addEventListener('click', function (event) {
        content.style.display = 'block'; // コンテンツの表示

        var targetId = this.getAttribute('href');
        var target = document.querySelector(targetId);

        // スクロール位置の調整
        var offsetTop = target.offsetTop - 20; // 20pxの余白を加える

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth',
        });

        event.preventDefault(); // デフォルトの動作を防止
    });
});
