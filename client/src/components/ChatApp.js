import React, { Component } from 'react';
import NameBox from './NameBox.js';
import Chat from 'twilio-chat';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    const name = localStorage.getItem('name') || '';
    const loggedIn = name !== '';
    this.state = {
      name,
      loggedIn,
      token: '',
      chatReady: false,
      messages: [],
      newMessage: ''
    };
    this.channelName = 'general';
  }

  componentWillMount = () => {
    console.log("componentWillMount was hit")
    if (this.state.loggedIn) {
      this.getToken();
    }
  };

  onNameChanged = event => {
    console.log("onNameChanged was hit")
    this.setState({ name: event.target.value });
  };

  logIn = event => {
    event.preventDefault();
    console.log("login was hit")
    if (this.state.name !== '') {
      localStorage.setItem('name', this.state.name);
      this.setState({ loggedIn: true }, this.getToken);
    }
  };

  logOut = event => {
    event.preventDefault();
    console.log("logout was hit")
    this.setState({
      name: '',
      loggedIn: false,
      token: '',
      chatReady: false,
      messages: [],
      newMessage: ''
    });
    localStorage.removeItem('name');
    this.chatClient.shutdown();
    this.channel = null;
  };

  getToken = () => {
    console.log("gittoken was hit")
    fetch(`/token/${this.state.name}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ token: data.token }, this.initChat);
      });
  };

  initChat = () => {
    console.log("initchat was hit")
    this.chatClient = new Chat(this.state.token);
    this.chatClient.initialize().then(this.clientInitiated.bind(this));
  };

  clientInitiated = () => {
    console.log("clientInitiated was hit")
    this.setState({ chatReady: true }, () => {
      this.chatClient
        .getChannelByUniqueName(this.channelName)
        .then(channel => {
          if (channel) {
            return (this.channel = channel);
          }
        })
        .catch(err => {
          if(err.body.code === 50300){
            return this.chatClient.createChannel({
              uniqueName: this.channelName
            });
          }
        })
        .then(channel => {
          this.channel = channel;
          window.channel = channel;
          return this.channel.join();
        })
        .then(() => {
          this.channel.getMessages().then(this.messagesLoaded);
          this.channel.on('messageAdded', this.messageAdded);
          console.log(this.channel)
        });
    });
  };

  messagesLoaded = messagePage => {
    console.log("messagesLoaded was hit")
    this.setState({ messages: messagePage.items });
  };

  messageAdded = message => {
    console.log("messagesAdded was hit")
    this.setState((prevState, props) => ({
      messages: [...prevState.messages, message]
    }));
  };

  onMessageChanged = event => {
    console.log("onMessageChanged was hit")
    this.setState({ newMessage: event.target.value });
  };

  sendMessage = event => {
    console.log("sendMessage was hit")
    event.preventDefault();
    const message = this.state.newMessage;
    this.setState({ newMessage: '' });
    this.channel.sendMessage(message);
  };

  newMessageAdded = li => {
    console.log("newMessageAdded was hit")
    if (li) {
      li.scrollIntoView();
    }
  };

  render() {
    var loginOrChat;
    const messages = this.state.messages.map(message => {
      return (
        <li key={message.sid} ref={this.newMessageAdded}>
          <b>{message.author}:</b> {message.body}
        </li>
      );
    });
    if (this.state.loggedIn) {
      loginOrChat = (
        <div>
          <h3>Messages</h3>
          <p>Logged in as {this.state.name}</p>
          <ul className="messages">
            {messages}
          </ul>
          <form onSubmit={this.sendMessage}>
            <label htmlFor="message">Message: </label>
            <input
              type="text"
              name="message"
              id="message"
              onChange={this.onMessageChanged}
              value={this.state.newMessage}
            />
            <button>Send</button>
          </form>
          <br /><br />
          <form onSubmit={this.logOut}>
            <button>Log out</button>
          </form>
        </div>
      );
    } else {
      loginOrChat = (
        <div>
          <NameBox
            name={this.state.name}
            onNameChanged={this.onNameChanged}
            logIn={this.logIn}
          />
        </div>
      );
    }
    return (
      <div>
        {loginOrChat}
      </div>
    );
  }
}

export default ChatApp;