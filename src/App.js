import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: `# This is header 
## this is subheader
[this will be a link](https://www.freecodecamp.org)

Here are some code \`<h1>Super Head1</h1>\`

**Code** block:
\`\`\`
// some comments
function addNum(arr) {
  return arr.reduce((a,b) => a + b), 0);
}
\`\`\`

> This is supposed to be block quotes

Here are the list of anime you may enjoy:
- Attack on Titan
- Naruto
- Horimiya

Here is an image
![Naruto image](https://i.pinimg.com/originals/e3/cc/0e/e3cc0ed88778d02c88d3676312ab020f.jpg)
`
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
