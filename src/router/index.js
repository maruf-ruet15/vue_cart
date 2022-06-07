import home from '../components/views/home.vue'
import about from '../components/views/about.vue'
import service from '../components/views/service.vue'
import products from '../components/views/products.vue'
import productDetail from '../components/views/productDetail.vue'
export const routes = [
    {
        path : '',
        component : home
    },
    {
        // path : '/about/:id',
        path : '/about',
        component : about
    },
    {
        path : '/service',
        component : service
    },
    {
        path : '/products',
        component : products
    },
    {
        path : '/productDetail/:_id',
        component : productDetail
    }
]
