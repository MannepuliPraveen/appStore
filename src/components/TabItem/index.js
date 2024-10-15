import './index.css'

const TabItem = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClassName = isActive ? `tabTxt active` : 'tabTxt'
  const changeTab = () => {
    onChangeTab(tabId)
  }
  return (
    <li className="tabItem">
      <button className="tabBtn" onClick={changeTab}>
        <p className={activeTabClassName}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
