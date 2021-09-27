import React, { Component } from 'react'
import Question from './Question';
import { API_BASE_URL } from '../config'


class AllQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            answers: [],
            isLoading: null,
            expanded: false,
            itemsToShow: 3,
        };
        this.showMore = this.showMore.bind(this);
    }

    showMore() {
        this.setState({ itemsToShow: this.state.itemsToShow + 3, expanded: true })
    }
    componentDidMount() {
        this.getQuestions();
    }

    async getQuestions() {
        try {
            this.setState({ isLoading: true });
            const response = await fetch(API_BASE_URL + '/questions');
            const QuestionList = await response.json();
            this.setState({ questions: QuestionList, isLoading: false });
        } catch (err) {
            this.setState({ isLoading: false });
            console.error(err);
        }

        console.log(this.state)
    }

    render() {
        return <div>
            <div className="list-group bg-dark ">
                <h2>Questions</h2>
                <div className="questionList">
                    {this.state.questions.slice(0, this.state.itemsToShow).map((q) =>
                        <Question obj={q} key={q.id} />
                    )}
                </div>

                <a className="btn btn-secondary btn-sm" onClick={this.showMore}>
                    <span>Show 3 more</span>
                </a>
            </div>
        </div>;
    }
}

export default AllQuestion;