export function asyncAction() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({name: 'hello world'}), 1000);
  });
}
