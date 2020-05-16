import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { Item, Input, Form, Label, Button, Thumbnail, Text} from 'native-base';

import BgImage from '../images/background.png';
import logo from '../images/checklist.png';
import RegisterForm from './component/RegisterForm';

class LoginForm extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return (
            <View style={styles.containerStyle}>
                <Image style={styles.bgImageStyle} source={BgImage}/>
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={logo}/>
                    <Text style={styles.textLogoStyle}>Checklist Apps</Text>
                </View>


                <Form style={styles.formLoginStyle}>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Username</Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>

                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Password</Text>
                        </Label>
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>

                    <Button block info style={styles.footerBottomStyle}> 
                        <Text>Sign in</Text>
                    </Button>

                    <TouchableOpacity>
                        <Text style={styles.signUpStyle}>
                            Belum Punya Akun ? Daftar Sekarang
                        </Text>
                    </TouchableOpacity>
                </Form>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
    flex: 1 
    },

    bgImageStyle: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },

    logoStyle: {
        marginTop: 80,
        marginBottom: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textLogoStyle: {
        marginTop: 15,
        fontSize: 15,
        color: 'white',
    },

    // form
    formLoginStyle: {
        marginTop: -30,
        paddingLeft: 10,
        paddingRight: 30,
    },

    inputStyle: {
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
    },

    //button
    footerBottomStyle: {
        paddingTop: 5,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,  
    },

    // daftar akun
    signUpStyle:{
        alignItems: "center",
        marginTop: 10,
        fontSize: 13,
        color: 'white',
        marginLeft: 50,
        marginRight: 20,
    }

})
      
export default LoginForm;   