const Login = () => import('../views/login')
export default [
  {
    path: '/admin/login',
    title: '登陆',
    name: '_login',
    meta: {
      requireAuth: true
    },
    component: Login
  },{
    name: 'login',
    path: '/admin',
    component: Login,
    meta: {
      requireGust: true
    }
  },
]
