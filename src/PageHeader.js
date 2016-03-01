
import React from 'react'
import Heading from './Heading'
import theme from './theme'

/**
 * Main page header with description
 */

const PageHeader = ({ heading, description, style, children, ...props }, { rebass }) => {

  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.PageHeader : {}
  const { scale, borderColor } = config

  return (
    <header className='PageHeader'
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingTop: scale[3],
        paddingBottom: scale[2],
        marginTop: scale[4],
        marginBottom: scale[4],
        borderBottomWidth: 2,
        borderBottomStyle: 'solid',
        borderBottomColor: borderColor,
        ...customStyle,
        ...style
      }}>
      <div style={{
          flex: '1 1 auto',
          marginBottom: scale[2]
        }}>
        <Heading level={1} children={heading} />
        {description &&
          <p style={{
            margin: 0
          }}
          children={description} />
        }
      </div>
      {children}
    </header>
  )
}

PageHeader.propTypes = {
  /** Page heading */
  heading: React.PropTypes.string,
  /** Description of page */
  description: React.PropTypes.string,
}

PageHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default PageHeader
