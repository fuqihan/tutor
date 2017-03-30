/**
 * Created by fuqihan on 2017/3/28.
 */
const height = () => {
  let login = document.documentElement.clientHeight + 50
  let input = login - 38
  login = login + 'px'
  input = input + 'px'
  var hegiht = { aa: login, bb: input }
  return hegiht
}
export default height
