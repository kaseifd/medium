window.addEventListener('load', () => {
    renderMenuItems();
    renderTrending();
    renderNews();
    renderTags();

    changeHeaderColor();
    modalEvents();
});

const changeHeaderColor = () => {
    const header = document.querySelector(".header");
    const boton = document.querySelector(".boton")
    window.addEventListener("scroll", () => {
        if (scrollY > 300) {
            header.classList.add("goto_white");
            boton.classList.add("goto_green");

        } else {
            header.classList.remove("goto_white");
            boton.classList.remove("goto_green");

        }
    });
}
const renderMenuItems = () => {
    const menuItemsHolder = document.querySelector(".header_navigation_items")
    let htmlString = ""

    for (let i = 0; i < home.menu.length; i++) {
        const menuItemsHTMLString = `<li class="header_navigation_item"><a href="${home.menu[i].link} ">${home.menu[i].label}</a></li>`;
        htmlString += menuItemsHTMLString;
    }

    menuItemsHolder.innerHTML = htmlString

}
const renderTrending = () => {
    const trendingHolder = document.querySelector(".home_grid_items")
    let htmlString = ""

    for (let i = 0; i < home.trending.length; i++) {
        const trendingHTMLString = `
            <article class="home_grid_item ${home.trending[i].star ? "" : "home_grid_nostar"}">
                <div class="big_num">${"0" + (i + 1)}</div>
                <div class="content">
                    <div class="author">
                        <div class="pic">
                            <a href="${home.trending[i].author.url} ">
                            <img src="${home.trending[i].author.img}" alt="${home.trending[i].author.name}"></a>
                        </div>
                        <a href="${home.trending[i].author.url}" class="name">${home.trending[i].author.name}</a>
                    </div>
                    <h2 class="title"> <a href="${home.trending[i].url}"> ${home.trending[i].title} </a></h2>
                    <div class="meta">
                        <div class="date">${home.trending[i].date}</div>
                        <div class="separator">
                            <div class="fa fa-circle"></div>
                        </div>
                        <div class="time_to_read">${home.trending[i].timeToRead} min read</div>
                        <div class="star">
                            <div class="fa fa-star"></div>
                        </div>
                    </div>
                </div>
            </article>
         `;
        htmlString += trendingHTMLString;
    }

    trendingHolder.innerHTML = htmlString

}
const renderNews = () => {
    const newsHolder = document.querySelector(".news")
    let htmlString = ""

    for (let i = 0; i < home.news.length; i++) {
        const newsHTMLString = `
        <article class="news_item ">
            <div class="news_item_content ${home.news[i].star ? "" : "news_item_nostar"}">
                <div class="author">
                    <div class="pic">
                        <a href="${home.news[i].author.url}">
                            <img src="${home.news[i].author.img}" alt="${home.news[i].author.name}">
                        </a>
                    </div>
                    <h3 class="name">
                        <a href="${home.news[i].author.url}"> ${home.news[i].author.name}</a>
                    </h3>
                </div>
                <h2 class="title">
                    <a href="${home.news[i].url}"> ${home.news[i].title}</a>
                </h2>
                <p>${home.news[i].resumen}</p>
                <div class="meta_holder ">
                    <div class="meta meta_nostar">
                        <div class="date">${home.news[i].date}</div>
                        <div class="separator">
                            <div class="fa fa-circle"></div>
                        </div>
                        <div class="time_to_read">${home.news[i].timeToRead} min read</div>
                        <div class="star">
                            <div class="fa fa-star"></div>
                        </div>
                    </div>
                    <div class="bookmark">
                        <div class="fa fa-bookmark"></div>
                    </div>
                </div>
            </div>
            <div class="news_item_image">
                <a href="${home.news[i].url}">
                    <img src="${home.news[i].img}" alt="${home.news[i].title}">
                </a>
            </div>
        </article>
            
            `
            ;
        htmlString += newsHTMLString;
    }

    newsHolder.innerHTML = htmlString

}
const renderTags = () => {
    const tagsHolder = document.querySelector(".tag_cloud_items")
    let htmlString = ""

    for (let i = 0; i < home.cloud.length; i++) {
        const tagsHTMLString = `
            <li class="tag">
                <a href="${home.cloud[i].link}">
                    ${home.cloud[i].label}
                </a>
            </li>
         `;
        htmlString += tagsHTMLString;
    }

    tagsHolder.innerHTML = htmlString

}
const modalEvents = () => {
    const modal = document.querySelector(".modal");
    const botones = document.querySelectorAll(".boton");
    const closeButton = document.querySelectorAll('.fa-times')
    const modalHolder = document.querySelector('.modal .modal_holder')
    const modalOverlay = document.querySelector(".modal_overlay")

    const bookmark = document.querySelectorAll(".bookmark")
    const modalBookmark = document.querySelector(".modal_bookmark")
    const modalHolderB = document.querySelector('.modal_holder_b')
    const modalOverlayB = document.querySelector(".modal_overlay_b")

    const signIn = document.querySelectorAll(".header_navigation_item")
    const modalSign = document.querySelector(".modal_sign")
    const modalOverlayS = document.querySelector(".modal_overlay_s")
    const modalHolderS = document.querySelector(".modal_holder_s")


    const openModal = () => {
        botones.forEach(boton => {
            boton.addEventListener("click", () => {
                modal.classList.add("appear");
                modalHolder.classList.add("opened");
                document.body.style.overflow = "hidden";
            });
        });

        bookmark.forEach(book => {
            book.addEventListener("click", () => {
                modalBookmark.classList.add("appear");
                modalHolderB.classList.add("opened");
                document.body.style.overflow = "hidden";
            });
        });

        signIn[3].addEventListener("click", () => {
            modalSign.classList.add("appear");
            modalHolderS.classList.add("opened");
            document.body.style.overflow = "hidden";
        });
    }

    const closeModal = () => {
        closeButton.forEach(cross => {
            cross.addEventListener("click", () => {
                modal.classList.remove("appear");
                modalHolder.classList.remove("opened");
                modalHolderB.classList.remove("opened");
                modalBookmark.classList.remove("appear")
                modalSign.classList.remove("appear");
                modalHolderS.classList.remove("opened");
                document.body.style.overflow = "visible";
            });
        });


        modalOverlay.addEventListener("click", () => {
            modal.classList.remove("appear");
            modalHolder.classList.remove("opened");
            document.body.style.overflow = "visible";
        });

        modalOverlayB.addEventListener("click", () => {
            modalHolderB.classList.remove("opened");
            modalBookmark.classList.remove("appear")
            document.body.style.overflow = "visible";
        });
        modalOverlayS.addEventListener("click", () => {
            modalHolderS.classList.remove("opened");
            modalSign.classList.remove("appear")
            document.body.style.overflow = "visible";
        });

        document.addEventListener('keyup', (ev) => {
            if (ev.key == "Escape") {
                modal.classList.remove("appear");
                modalHolder.classList.remove("opened");
                modalHolderB.classList.remove("opened");
                modalBookmark.classList.remove("appear")
                modalSign.classList.remove("appear");
                modalHolderS.classList.remove("opened");
                document.body.style.overflow = "visible";
            }
        });
    }

    openModal();
    closeModal();

}






