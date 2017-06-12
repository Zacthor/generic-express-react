export default function mapStateToProps({home}) {
  return {
    name: home.get('name'),
    nameInput: home.has('nameInput') ? home.get('nameInput') : home.get('name'),
  };
}
