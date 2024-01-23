import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('0717ea09-c058-4072-98c0-b6d2a8b253e2', props.user.username, props.user.secret)
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height:'100%'}} />
    </div>
}

export default ChatsPage;