export default {
  path: '/about',
  loader: (req, finish) => {
    finish({
      templateName: 'about',
      initialState: { name: 'stuff' },
      title: 'About'
    });
  }
};
