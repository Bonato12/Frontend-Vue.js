import HomeCliente from './components/Cliente/HomeCliente.vue'
import NuevoCliente from './components/Cliente/NuevoCliente.vue'
import Login from './components/Administrar/Login.vue'
import Home from './components/Administrar/Home.vue'
import Editar from './components/Cliente/EditarCliente.vue'
import HomeProducto from './components/Producto/HomeProducto'
import NuevoProducto from './components/Producto/NuevoProducto.vue'
import HomeVenta from './components/Venta/HomeVenta.vue'
import NuevaVenta from './components/Venta/NuevaVenta.vue'
import {store} from './store.js';


export const routes = [
        {path:'/HomeCliente',
         component: HomeCliente,
         beforeEnter:((to,from,next)=> {
          next(store.state.auth)

        })},
        {path:'/NuevoCliente',
        component: NuevoCliente,
        beforeEnter:((to,from,next)=> {
         next(store.state.auth)

        })},
        {path:'/EditarCliente/:id', component:Editar},
        {path:'/Login', component:Login},
        {path:'/Home',
         component:Home,
       },
       {path: '/HomeProducto', component: HomeProducto},
       {path:'/NuevoProducto', component: NuevoProducto},
       {path:'/HomeVenta', component: HomeVenta},
       {path:'/NuevaVenta', component: NuevaVenta}

];
