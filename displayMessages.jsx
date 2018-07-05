class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange=this.handleChange.bind(this)
    this.submitMessage=this.submitMessage.bind(this) // missed bind before. shit happens!
    } 
    
 handleChange(event)  {
    this.setState({
      input: event.target.value
    })
  }
  submitMessage() {
 let msgs = [...this.state.messages, this.state.input]
   this.setState({
     messages: msgs,
     input:''})
     }

  render() {
   return (
     <div>
       <h2>Type in a new Message:</h2>
       
   <input onChange={this.handleChange} 
     value={this.state.input} />

     <button type="submit" onClick={this.submitMessage}>
     Add message</button>
          <ul>
     {this.state.messages.map(msg => <li>{msg}</li>)}
          </ul>
      </div>
    );
  }
};