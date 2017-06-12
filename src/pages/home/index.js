import Home from './home';

//mimics asyncAction
function asyncAction() {
  return new Promise((resolve) => {
    setTimeout(()=>resolve({name: 'hello world'}), 1000);
  })
}

const router = {
  path: '/',
  loader: (req, finish) => {
    asyncAction().then((data) => {
      finish({
        templateName: 'home',
        initialState: data,
        title: 'Home',
      });
    })
  }
};

export default {
  router,
  App: Home,
};
