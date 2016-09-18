
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({
  small,
  active,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, scale, bold } = theme

  const cx = classnames('NavItem', className)

  const activeStyle = active ? subComponentStyles.active : {}

  const sx = {
    fontSize: small ? fontSizes[6] : fontSizes[5],
    fontWeight: bold,
    lineHeight: '1rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: small ? scale[1] / 2 : scale[1],
    paddingBottom: small ? scale[1] / 2 : scale[1],
    paddingLeft: scale[1],
    paddingRight: scale[1],
    color: 'inherit',
    cursor: 'pointer',
    ...style,
    ...activeStyle
  }

  return (
    <a
      {...props}
      className={cx}
      style={sx} />
  )
}

NavItem.propTypes = {
  /** Sets active styles */
  active: React.PropTypes.bool,
  /** Sets a smaller font size for compact UI */
  small: React.PropTypes.bool
}

export default withRebass(NavItem)

