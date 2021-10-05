import { Component } from "react"
import styles from '../styles/chat.module.scss'
import { FormattedMessage } from "react-intl"
import io from 'socket.io-client'

class Message{
    constructor(user,text){
      this.user=user
      this.text=text
    } 
  }
const socket=io("https://appchat-websocket.herokuapp.com")

export default class Chat extends Component {

    state={
        messages:[],
        avaliable:false
    }

    componentDidMount() {
        socket.on("connect",()=>{
            socket.on("aviso-disponibilidad",(disponible)=>{
            this.changeAvaliable(disponible)
            disponible ? 
            this.addMessage(new Message(false,this.props.conectMessage))
            :
            this.addMessage(new Message(false,this.props.desconectMessage))
            })
            
            socket.on("to-user",(mensaje)=>this.addMessage(new Message(false,mensaje)))
          })
          socket.on("disconnect",()=>{
            this.addMessage(new Message(false,"usted se desconecto"))
          })
      }

      changeAvaliable(avaliability){
        this.setState({
            avaliable:avaliability
        })
    }

    addMessage(newMessage){
        this.setState({messages:[...this.state.messages,newMessage]})
        setTimeout(() => {
            document.getElementById('chat-box').scrollTop=document.getElementById('chat-box').scrollHeight;
        }, 50);
       
    }
    _handleKeyPress=(tecla)=>{
        if(tecla.key=="Enter")
          if(tecla.target.value!==""){
          socket.emit("to-daniel",tecla.target.value)
          this.addMessage(new Message(true,tecla.target.value))
          tecla.target.value="" 
      } 
    } 

    render() {
        return (
            <div className={styles.chat}>
                 <div id="chat-box" className={styles.chat_box}>
                    {  
                        this.state.messages.map((message)=> 
                            message.user ? <div className={styles.user_message}>{message.text}</div> : <div  className={styles.daniel_message}>{message.text}</div>)
                    }
                 </div>
                 <FormattedMessage id="placeholder">
                   {
                     placeholder=><input className={styles.chat_input} placeholder={placeholder} onKeyPress={this._handleKeyPress} type="text" />
                   }
                 </FormattedMessage>
                 
            </div>
        )
    }
}
