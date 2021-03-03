import React from 'react'
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            chirps: []
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ task: '', 
        chirps: [...this.state.chirps, {id: uuidv4(), task: this.state.task}] });
    }
    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-7">
                        <form className="form-group">
                            <label>Chirp:</label>
                            <input
                                value={this.state.task}
                                onChange={e => this.setState({ task: e.target.value })}
                                className="form-control"
                            />
                            <button onClick={e => this.handleSubmit(e)} className="btn btn-primary mt-3">
                                Add Chirp
                        </button>
                        </form>
                    </div>
                </section>
                <section className="row justify-content-center mt-3">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {this.state.chirps.map(chirp => (
                                <li className = "list-group-item" key ={`chirp-task-${chirp.id}`}>
                                    {chirp.task}
                                    </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>

        );
    }
}

export default App;