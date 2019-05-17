import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';;


class UiAvatar extends Component {
    render() { 
        const styles = {
            avatar:{
                margin: 0
            }
        };
        return (  
            <Avatar src={'https://cinema10.com.br/upload/noticias/2018/13962cd976.jpg'} style={styles.avatar}/>
        );
    };
};

export default UiAvatar;