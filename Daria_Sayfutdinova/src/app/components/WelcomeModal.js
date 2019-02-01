/*В файле WelcomeModal.js: реализуйте компонент WelcomeModal, который будет выводить перед пользователем приветственное
 окно после своего монтирования ( т.е. вызвать метод в componentDidMount() ) .
 При этом показ и скрытие модального окна должно регулироваться за счет изменения состояния this.state = {modal: false}.
  Добавьте в модальное окно кнопку закрытия (самого модального окна).
  */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        console.log('1');
        this.state = {
           modal: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('2')
        return null
    }


    render() {
        let welcomeModule;
        if (this.state.modal) {
            welcomeModule = <div className='modal'>
                <img src="./src/app/components/TMNT.jpg" alt={"tmnt"}/>
                <button className='button' onClick={() => {
                    this.setState({modal: false})
                }}>Close!</button>
            </div>

        }
        return <> {welcomeModule}; </>

    }

    componentDidMount() {
       this.setState({modal: true})
        console.log('4')
    }

}



export default WelcomeModal;