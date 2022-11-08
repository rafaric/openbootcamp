import React from 'react'
import PropTypes from 'prop-types'

function componentB(props) {
  return (
    <div>{props.conectado ? 'Conectado' : 'No conectado'}</div>
  )
}

componentB.propTypes = {
    conectado : PropTypes.bool
}

export default componentB

