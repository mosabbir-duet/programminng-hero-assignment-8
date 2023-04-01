import React from 'react';
import './Question.css';
const Question = () => {
    return (
        <div className='container row row-cols-1 row-cols-md-2 question-container'>
            <div className="col">
                <h3>Q1: What is the difference between props and state?</h3>
                <p>
                    <strong>Props:</strong> Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                </p>
                <p>
                    <strong>State:</strong> The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>
            </div>
            <div className="col">
                <h3>Q2: How to work useState()</h3>
                <p>useState is a react hook that allows to create state variables. Hooks can be used only within functional components. By using useState in a component, it allows that component to have a dedicated state of its own.
                Syntax: const [statevaraible, setStatevaraible] = useState(initialstate)
                On the left side state and setState in the square brackets. The first element holds the initial value and the second element is a function that is used to update the state.
                </p>
            </div>
            <div className="col">
                <h3>Q3: How does React work?</h3>
                <p>ReactJS is one of the most popular JavaScript libraries for mobile and web application development.React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.
                React used virtual dom.React Virtual dom is a javascript representation of the actual DOM. When update are made react compares the current DOM to the virtual DOM and only updates the difference between them.
                </p>
            </div>
            <div className="col">
                <h3>Q4: What does useEffect do other than load data?</h3>
                <p>After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</p>
            </div>
        </div>
    );
};

export default Question;