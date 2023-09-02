import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div class="text-center">
        <img src={loading} alt="loading" class="img-fluid " />
      </div>
    )
  }
}

export default Spinner