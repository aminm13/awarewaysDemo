import React, { Component } from 'react'
import { API_BASE_URL } from '../config'

class CreateNew extends React.Component {
    constructor() {
        super();
        this.state = {
            title: null,
            body: null,
            author: 'Amin testing, will be replaced with auth',
            type: 'o',
            category: 'laravel'
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate() {
        console.log(this.state)
    }
    async handleNext() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: this.state.title, body: this.state.body, type: this.state.type, category: this.state.category })
        };

        try {
            const response = await fetch(API_BASE_URL + '/api/questions/create', requestOptions);
            const data = await response.json();
            console.log(data)

        } catch (err) {
            console.error(err);
        }

    }

    handleChange = (event) => {
        this.setState({ ...this.state.request_data, [event.data.target]: event.data.value })
    }
    render() {
        return <div className="list-group-item list-group-item-action h-20vh flex-column align-items-start  bg-dark" >
            <div className="card text-white bg-dark mb-3 ">
                <div className="card-header d-flex w-60 justify-content-between">
                    <h5 className="mb-1">Add A New Question</h5>
                </div>
                <div className="card-body">
                    <p className="mb-1 card-tex"></p>
                </div>
                <div className="card-footer  w-60 justify-content-end">
                    <form className="form-horizontal">
                        <fieldset>
                            <div id="legend primary">
                                <legend className="text-left text primary">Register</legend>
                            </div>
                            <div className="control-group">
                                <label className="control-label" for="title">Title</label>
                                <div className="controls">
                                    <input type="text" id="title" name="title" placeholder="Title" onChange={this.handleChange} className="input-xlarge" />
                                </div>
                            </div>

                            <div className="control-group">
                                <label className="control-label" for="body">Body</label>
                                <div className="controls">
                                    <input type="textarea" id="body" name="body" placeholder="Body" onChange={this.handleChange} className="input-xlarge" />
                                </div>
                            </div>
                            <div className="control-group">
                                <label className="control-label" for="email">Question Type</label>
                                <div className="controls">
                                    <select name="type" className="form-control">
                                        <option value="ml">Multiple Choice</option>
                                        <option value="open">Open</option>
                                    </select>
                                </div>
                            </div>
                            <div className="control-group">
                                <label className="control-label" for="email">Question Category</label>
                                <div className="controls">
                                    <select name="type" className="form-control">
                                        <option value="laravel">Laravel</option>
                                        <option value="php">Php</option>
                                    </select>
                                    <small>Dont see the category you are looking for? <a href='#'>Create one</a></small>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="controls">
                                    <button className="btn btn-success" onClick={this.handleNext}>Next</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>;
    }
}

export default CreateNew;