import * as React from "react";

class AuthProvider extends React.Component {
    /// здесь ты создаешь стейт, методы для авторизации (login и logout)
    state = {
        isAuth: false,
    }
    login = (email, password) => {
        if (email === 'какой то email' && password === 'какой то пароль') {
            this.setState({isAuth: true})
        }
    }
    logout = () => this.setState({isAuth: false})

    render() {
        const {children} = this.props;
        return (
            <Provider value={/// сюда нужно положить объект с методами авторизации и статус авторизации}>
                {children}
                </Provider>
                )
                }
                }
                export {AuthProvider, AuthConsumer};