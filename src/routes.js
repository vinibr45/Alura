import meuCadastro from './components/cadastro/meuCadastro.vue'
import myHome from './components/home/myHome.vue'
export const routes = [
    { path: '', component: myHome, titulo : 'Home' },
    { path: '/cadastro', component: meuCadastro, titulo : 'Cadastro' }
];