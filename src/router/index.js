import { createRouter, createWebHistory } from "vue-router";
import Inicio from "../views/Inicio.vue";
import Lavado from "../views/Lavado.vue";
import Secado from "../views/Secado.vue";
import Planchado from "../views/Planchado.vue";
import AgendarDomicilio from "../views/AgendarDomicilio.vue";
import ListaDomicilios from "../views/ListaDomicilios.vue";
import ContactoView from "../views/ContactoView.vue";
import MensajesView from "../views/MensajesView.vue";
import LoginView from "../views/LoginView.vue";


const routes = [

     {
        path:"/",
      component:Inicio
      
      },
  {
    path: "/AgendarDomicilio",
    name: "AgendarDomicilio",
    component: AgendarDomicilio,
  },
  {
    path: "/MensajesView",
    name: "MensajesView",
    component: MensajesView,
  },

  {
    path: "/Inicio",
    name: "Inicio",
    component: Inicio,
  },
{
    path: "/Lavado",
    name: "Lavado",
    component: Lavado,
  },
  {
    path: "/Secado",
    name: "Secado",
    component: Secado,
  },
  {
    path: "/Planchado",
    name: "Planchado",
    component: Planchado,
  },
  {
    path: "/Login",
    name: "Login",
    component: LoginView,
  },
   {
    path: "/ContactoView",
    name: "ContactoView",
    component: ContactoView,
  },
  {
    path: "/ListaDomicilios",
    name: "ListaDomicilios",
    component: ListaDomicilios,
    meta: { requiresAuth: true }
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = localStorage.getItem('token')

  if (requiresAuth && !token) {
    // No está logueado, redirige a login
    next({ name: 'Login' })
  } else {
    // Permite navegación
    next()
  }
})


// router.beforeEach(async (to)=>{
//   const UserStore=useUserStore();
//   console.log(to.name,UserStore.login)
//   if(to.meta.requiresAuth && !UserStore.login){
//     return{
//       path:'/iniciosesion'
//     }
//   }
//   if(UserStore.login && to.name==="iniciosesion"){
//     return{
//       path:'/controladoresgear'
//     }
//   }
// })
export default router;
