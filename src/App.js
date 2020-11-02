import React, { Component } from 'react';
import './App.css';
import DashboardPlugin from '@uppy/dashboard'
import GoogleDrive from '@uppy/google-drive'
import DropBox from '@uppy/dropbox'
import Url from '@uppy/url'
import Uppy from '@uppy/core'
import { Dashboard } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.uppy = Uppy({
      autoProceed: true
    })
    .use(DashboardPlugin, {
      id: 'DashboardPlugin',
    })
    // empty url requests are proxied to http://localhost:8080
    // look package.json
    .use(GoogleDrive, {
      target: DashboardPlugin,
      companionUrl: '/'
    })
    .use(Url, {
      target: DashboardPlugin,
      companionUrl: '/'
    })
    .use(DropBox, {
      target: DashboardPlugin,
      companionUrl: '/'
    })
  }
  render() {
    return (
      <div className="App">
        <div>
          <Dashboard
            uppy={this.uppy}
          />
        </div>
      </div>
    );
  }
}

