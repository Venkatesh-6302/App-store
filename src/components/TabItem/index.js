// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, isActive, updateTabId} = props

  const className = isActive ? 'active-btn' : ''

  const {displayText, tabId} = tabsList

  const onClickBtn = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-list">
      <button type="button" className={`tab ${className}`} onClick={onClickBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
