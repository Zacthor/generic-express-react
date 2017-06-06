//mimics asyncAction
function asyncAction() {
  return new Promise((resolve) => {
    setTimeout(()=>resolve({name: 'hello world'}), 1000);
  })
}

export default {
  path: '/',
  loader: (req, finish) => {
    asyncAction().then((data) => {
      finish({
        templateName: 'App',
        initialState: data,
        title: 'Home',
      });
    })
  }
}
