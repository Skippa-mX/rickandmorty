import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/MainPage";
import CharactersPage from "@/pages/CharactersPage";
import AboutPage from "@/pages/AboutPage";


const routes = [
  {
    path: '/' ,
    component: MainPage
  },
  {
    path: '/characters',
    component: CharactersPage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
