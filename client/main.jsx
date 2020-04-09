import React from 'react'
import { mount } from 'react-mounter'
import { Provider } from 'react-redux'


import { MainLayout } from '../imports/ui/layouts/MainLayout'
import App from '../imports/ui/App'

FlowRouter.route('/', {
    action(){
        mount(MainLayout, {
          content: <Provider store={store}> <App/> </Provider>
        })
    }
})