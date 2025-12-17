import {dashboard} from "/SPA%20project/js/pages/dashboard.js";
import posts from "/SPA%20project/js/pages/posts.js";
import products from "/SPA%20project/js/pages/products.js";


const open_sidebar = document.querySelector(".sidebar");
const chevron = document.querySelector(".chevron");
const svgs = document.querySelectorAll("svg");







function navegateRouter(url) {
    history.pushState(null, null, url)
}

function router() {
    const routes = [
        {path:'/SPA%20project/index.html', view: dashboard},
        {path:'/SPA%20project/products', view: products },
        {path:'/SPA%20project/posts', view: posts },
    ]

    const potentialrouts=routes.map((item) => {
        return {
            route: item,
            ismatch: location.pathname === item.path
        }
        // console.log(item.path)
        // console.log(location.pathname)
    })

    let match = potentialrouts.find((item)=>item.ismatch)
    // if (!match) {
    //     [{
    //         path: 'SPA%20project/not-fond',
    //         view: () => console.log('hi')
    //     }]
    // }

    document.querySelector('.content__items').innerHTML = match.route.view()
}





window.addEventListener("popstate", router)


document.addEventListener('DOMContentLoaded', () => {
    router();
})


document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navegateRouter(e.target.href);
        router();

    }
})



chevron.addEventListener("click", function() {
    open_sidebar.classList.toggle("mini--sidebar");
})

svgs.forEach(svg => {
    svg.addEventListener("click", function(e) {
        e.preventDefault();
    })
})

