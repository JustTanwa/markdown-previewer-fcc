import React from 'react'
import './App.css';

window.marked.setOptions({
  breaks: true,
});

const template = `# An example of a markdown and a previewer
      
## Some examples of things such as list, link, images and more...

[See My Tic-Tac-Toe Game](https://focused-wozniak-fe8d98.netlify.app/)

Can simply write inline code like so \`<h1>Super Head1</h1>\`

Or you can write a code **block** easily like so: 
\`\`\`
// some comments
function addNum(arr) {
  return arr.reduce((a,b) => a + b), 0);
}
\`\`\`

> This is supposed to be block quotes

You can even write lists, for example a list of popular anime:
- Attack on Titan
- Naruto
- One piece

Naruto approves of this markup!

![Naruto image](https://i.pinimg.com/originals/e3/cc/0e/e3cc0ed88778d02c88d3676312ab020f.jpg)
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: template,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    document.getElementById('preview').innerHTML = window.marked.parse(e.target.value);
  }
  
  componentDidMount() {
    document.getElementById('preview').innerHTML = window.marked.parse(this.state.editor)
  }
  
  render() {

    return (
      <div className="container">
        <div className="row">
          <h1 id="title" className="text-center"> Markdown Previwer </h1>
        </div>
        <div className="row">
          <div className="column">
            <textarea onChange={this.handleChange} id="editor">
              {this.state.editor}
            </textarea>
          </div>
          <div className="column">
            <div id="preview">
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
