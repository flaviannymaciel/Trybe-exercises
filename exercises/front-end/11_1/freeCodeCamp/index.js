//https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element
const JSX = <h1>Hello JSX!</h1>;
//https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-complex-jsx-element
const JSX = (
  <div>
    <h1></h1>
    <p></p>
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
);
//https://www.freecodecamp.org/learn/front-end-libraries/react/add-comments-in-jsx
const JSX = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* */}
  </div>
);
//https://www.freecodecamp.org/learn/front-end-libraries/react/render-html-elements-to-the-dom
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'));
//https://www.freecodecamp.org/learn/front-end-libraries/react/define-an-html-class-in-jsx
const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);
//https://www.freecodecamp.org/learn/front-end-libraries/react/learn-about-self-closing-jsx-tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
//https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-stateless-functional-component
const MyComponent = function () {
  // change code below this line
  return <div>'texto'</div>;
};
//https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-react-component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // change code below this line
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
    // change code above this line
  }
}
//https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-component-with-composition
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* change code below this line */}
        <ChildComponent />

        {/* change code above this line */}
      </div>
    );
  }
}
