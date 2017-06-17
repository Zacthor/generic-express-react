export default function mapStateToProps({home}) {
  const obj = home.get('obj');
  if (home.get('doSideEffect')) {
    obj.money = obj.b.currency + obj.b.value;
    delete obj.b;
  }
  return {
    name: home.get('name'),
    nameInput: home.has('nameInput') ? home.get('nameInput') : home.get('name')
  };
}
