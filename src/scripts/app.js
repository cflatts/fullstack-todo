import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import ListView from './components'

const app = function() {

    var ListModel = Backbone.Model.extend ({
        defaults: {
            status: 'incomplete'
            url: '/api/tasks'
        }
    })

    var ListCollection = Backbone.Collection.extend ({
        model: ListModel
        url: '/api/tweets'
    })

    ReactDOM.render(<ListView listColl = {new ListCollection()} />, document.querySelector('.container'))
}

app()