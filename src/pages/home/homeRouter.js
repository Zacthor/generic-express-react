export default {
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

function asyncAction() {
  return new Promise((resolve) => {
    setTimeout(()=>resolve({name: 'hello world'}), 1000);
  })
}
