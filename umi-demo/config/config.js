export default{
  antd: {},
  dva: {},
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'helloworld',
        component: './HelloWorld'
      },
      { path: 'puzzlecards', component: './puzzlecards' },
    ]
  }],
  singular: true,
}
