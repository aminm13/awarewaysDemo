import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
class Question extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <div class="list-group-item list-group-item-action h-20vh flex-column align-items-start  bg-dark">
            <div className="card text-white bg-dark mb-3 ">
                <div className="card-header d-flex w-60 justify-content-between">
                    <h5 class="mb-1">{this.props.obj.title}</h5>
                    <small>{this.props.obj.created_at} </small>
                </div>
                <div className="card-body">
                    <p class="mb-1 card-tex">{this.props.obj.body.slice(0, 150)} ... </p>
                </div>
                <div className="card-footer d-flex w-60 justify-content-end">
                    <FontAwesomeIcon icon={faTrash} />
                    <FontAwesomeIcon icon={faEdit} />
                </div>
            </div>
        </div>;
    }
}

export default Question;