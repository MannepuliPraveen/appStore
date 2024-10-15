import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="appItem">
      <img src={imageUrl} alt={appName} className="appImage" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
