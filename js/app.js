import {dashboard} from "/SPA%20project/js/pages/dashboard.js";
import posts from "/SPA%20project/js/pages/posts.js";
import products from "/SPA%20project/js/pages/products.js";

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

    console.log(match.route.view())
}


function navegateRouter(url) {
    history.pushState(null, null, url)

}

document.addEventListener('DOMContentLoaded', () => {
    router();
})

window.addEventListener("popstate", router)


document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
        e.preventDefault();
        navegateRouter(e.target.href);
        router();

    }
})

