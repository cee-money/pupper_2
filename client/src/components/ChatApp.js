import React, {Component} from 'react';
// import $ from 'jquery'
import Twilio from 'twilio-chat';
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";

class ChatApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username: null,
            channel: null
        }
    }

    // getToken = () => {
    //     return new Promise(((resolve, reject) => {
    //         this.setState({
    //             messages: [...this.state.messages, {body: `Connecting...`}]
    //         });

    //         // $.getJSON(`/token/${Math.floor(Math.random() * (100 - 1)) + 1}`, (token) => {
    //         $.getJSON(`/token`, (token) => {
    //             this.setState({username: token.identity});
    //             resolve(token)
    //         }).fail(() => {
    //             reject(Error("Failed to connect."))
    //         });
    //     }));

    // };

    componentDidMount = () => {
        this.getToken()
            .then(this.createClientChat)
            .then(this.joinGeneralChannel)
            .then(this.configureChannelEvents)
            .catch((error) => {
                this.addMessage({body: `Error: ${error.message}`})
            })
    };

    addMessage = (message) => {
        const messageData = {...message, me: message.author === this.state.username};
        this.setState({
            messages: [...this.state.messages, messageData]
        })
    };

    createClientChat = (token) => {
        return new Promise((resolve, reject) => {
            resolve(Twilio.create(token))
        });
    };

    joinGeneralChannel = (chatClient) => {
        return new Promise((resolve, reject) => {
            chatClient.getSubscribedChannels().then(() => {
                chatClient.getChannelByUniqueName('general').then((channel) => {
                    this.addMessage({body: 'Joining general channel...'});
                    this.setState({channel});

                    channel.join().then(() => {
                        this.addMessage({body: `Joined general channel as ${this.state.username}`});
                        window.addEventListener('beforeunload', () => channel.leave());
                    }).catch(() => reject(Error('Could not join general channel.')));

                    resolve(channel)
                }).catch(() => this.createGeneralChannel(chatClient));
            }).catch(() => reject(Error('Could not get channel list.')));
        });
    };

    createGeneralChannel = (chatClient) => {
        return new Promise(((resolve, reject) => {
            this.addMessage({body: 'Creating channel...'});
            chatClient
                .createChannel({uniqueName: 'general', friendlyName: 'General Chat'})
                .then(() => this.joinGeneralChannel(chatClient))
                .catch(() => reject(Error('Could not create channel.')));
        }));
    };

    configureChannelEvents = (channel) => {
        channel.on('messageAdded', ({author, body}) => {
            this.addMessage({author, body})
        });

        channel.on('memberJoined', (member) => {
            this.addMessage({body: `${member.identity} has joined the chat.`})
        });

        channel.on('memberLeft', (member) => {
            this.addMessage({body: `${member.identity} has left the chat.`})
        });
    };

    handleNewMessage = (text) => {
        if (this.state.channel) {
            this.state.channel.sendMessage(text);
        }
    };

    render() {
        return (
            <div>
                <MessageList messages={this.state.messages}/>
                <MessageForm onMessageSend={this.handleNewMessage}/>
            </div>
        );
    };
}

// import NameBox from './NameBox.js';
// import Chat from 'twilio-chat';
// import {useAuth0} from "../react-auth0-wrapper";
//
// class ChatApp extends Component {
//     constructor(props) {
//         super(props);
//         const name = localStorage.getItem('name') || '';
//         const loggedIn = name !== '';
//         this.state = {
//             name: "",
//             uniqueID: "",
//             loggedIn,
//             token: '',
//             chatReady: false,
//             messages: [],
//             newMessage: ''
//         };
//         this.channelName = 'general';
//     }
//
//     addToState() {
//         const {user, loading} = useAuth0();
//         if (loading) {
//             console.log("Loading");
//         } else {
//             this.setState({
//                 uniqueID: user._id,
//                 name: user.given_name
//             })
//         }
//     }
//
//     componentWillMount = () => {
//         console.log("componentWillMount was hit")
//         if (this.state.loggedIn) {
//             this.getToken();
//         }
//     };
//
//     onNameChanged = event => {
//         console.log("onNameChanged was hit")
//         this.setState({name: event.target.value});
//     };
//
//     logIn = event => {
//         event.preventDefault();
//         console.log("login was hit")
//         if (this.state.name !== '') {
//             localStorage.setItem('name', this.state.name);
//             this.setState({loggedIn: true}, this.getToken);
//         }
//     };
//
//     logOut = event => {
//         event.preventDefault();
//         console.log("logout was hit")
//         this.setState({
//             name: '',
//             loggedIn: false,
//             token: '',
//             chatReady: false,
//             messages: [],
//             newMessage: ''
//         });
//         localStorage.removeItem('name');
//         this.chatClient.shutdown();
//         this.channel = null;
//     };
//
//     getToken = () => {
//         console.log("gittoken was hit")
//         fetch(`http://localhost:3001/token/${this.state.uniqueID}`, {
//             method: 'POST'
//         })
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({token: data.token}, this.initChat);
//             });
//     };
//
//     initChat = () => {
//         console.log("initchat was hit")
//         this.chatClient = new Chat(this.state.token);
//         this.chatClient.initialize().then(this.clientInitiated.bind(this));
//     };
//
//     clientInitiated = () => {
//         console.log("clientInitiated was hit")
//         this.setState({chatReady: true}, () => {
//             this.chatClient
//                 .getChannelByUniqueName(this.channelName)
//             console.log("Line 94" + this.channelName)
//                 .then(channel => {
//                     if (channel) {
//                         return (this.channel = channel);
//                     }
//                 })
//                 .catch(err => {
//                     if (err.body.code === 50300) {
//                         return this.chatClient.createChannel({
//                             uniqueName: this.channelName,
//                             isPrivate: true
//                         });
//                     }
//                 })
//                 .then(channel => {
//                     this.channel = channel;
//                     window.channel = channel;
//                     return this.channel.join();
//                 })
//                 .then(() => {
//                     this.channel.getMessages().then(this.messagesLoaded);
//                     this.channel.on('messageAdded', this.messageAdded);
//                 });
//         });
//     };
//
//     messagesLoaded = messagePage => {
//         console.log("messagesLoaded was hit")
//         this.setState({messages: messagePage.items});
//     };
//
//     messageAdded = message => {
//         console.log("messagesAdded was hit")
//         this.setState((prevState, props) => ({
//             messages: [...prevState.messages, message]
//         }));
//     };
//
//     onMessageChanged = event => {
//         console.log("onMessageChanged was hit")
//         this.setState({newMessage: event.target.value});
//     };
//
//     sendMessage = event => {
//         console.log("sendMessage was hit")
//         event.preventDefault();
//         const message = this.state.newMessage;
//         this.setState({newMessage: ''});
//         this.channel.sendMessage(message);
//     };
//
//     newMessageAdded = li => {
//         console.log("newMessageAdded was hit")
//         if (li) {
//             li.scrollIntoView();
//         }
//     };
//
//     render() {
//         var loginOrChat;
//         const messages = this.state.messages.map(message => {
//             return (
//                 <li key={message.sid} ref={this.newMessageAdded}>
//                     <b>{message.author}:</b> {message.body}
//                 </li>
//             );
//         });
//         if (this.state.loggedIn) {
//             loginOrChat = (
//                 <div>
//                     <h3>Messages</h3>
//                     <p>Logged in as {this.state.name}</p>
//                     <ul className="messages">
//                         {messages}
//                     </ul>
//                     <form onSubmit={this.sendMessage}>
//                         <label htmlFor="message">Message: </label>
//                         <input
//                             type="text"
//                             name="message"
//                             id="message"
//                             onChange={this.onMessageChanged}
//                             value={this.state.newMessage}
//                         />
//                         <button>Send</button>
//                     </form>
//                     <br/><br/>
//                     <form onSubmit={this.logOut}>
//                         <button>Log out</button>
//                     </form>
//                 </div>
//             );
//         } else {
//             loginOrChat = (
//                 <div>
//                     <NameBox
//                         name={this.state.name}
//                         onNameChanged={this.onNameChanged}
//                         logIn={this.logIn}
//                     />
//                 </div>
//             );
//         }
//         return (
//             <div>
//                 {loginOrChat}
//             </div>
//         );
//     }
// }
//
export default ChatApp;