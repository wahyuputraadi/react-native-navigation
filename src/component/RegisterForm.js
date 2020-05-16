import React, {Component} from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image } from 'react-native';
import { Item, Input, Form, Button, Thumbnail, Text, Label } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';
import BgImage from '../images/background.png';
import logo from '../images/checklist.png';

class RegisterForm extends Component {
    constructor(props) 
    {
        super(props);
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image style={styles.bgImageStyle} source={BgImage}/>
                
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={logo}>
                    </Thumbnail>
                    <Text style={styles.textLogoStyle}>Silahkan isi Data Diri Anda</Text>
                </View>

                <Form style={styles.formRegisterStyle}>
                    {/* <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS="android" ? "android-person" : md-person } size={26} color={'white'} />
                        <Input style={styles.inputStyle}/>
                    </Item>

                    <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS="android" ? "android-lock" : md-lock } size={26} color={'white'} />
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>

                    <Item style={styles.itemStyle}>
                        <Icon name={Platform.OS="android" ? "android-mail" : md-mail } size={26} color={'white'} />
                        <Input style={styles.inputStyle}/>
                    </Item> */}

                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Username</Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>

                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Email</Text>
                        </Label>
                        <Input style={styles.inputStyle}/>
                    </Item>

                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Password</Text>
                        </Label>
                        <Input style={styles.inputStyle} secureTextEntry={true}/>
                    </Item>

                </Form>
                <Button block info style={styles.footerButtonStyle}>
                    <Text>Daftar</Text> 

                </Button>
            </View>
        )
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
        height: '100%',
    },

    logoStyle: {
        marginTop: 80,
        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputStyle: {
        color: 'white',
        fontSize: 14,
        marginBottom: 5,
    },

    textLogoStyle: {
        marginTop: 20,
        fontSize: 15,
        color: 'white',
    },

    footerButtonStyle:{
        paddingTop: 0,
        marginTop: 40,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,  
    }

})

export default RegisterForm;