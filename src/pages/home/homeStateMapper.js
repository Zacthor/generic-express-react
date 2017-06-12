export default function mapStateToProps({home}) {
  return {name: home.get('name')};
}
