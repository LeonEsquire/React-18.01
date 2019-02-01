/*В файле Blog.js: подключите к данному файлу модульPost.js.
Здесь вы должны обработать переданные модулем App.js посты (массив с объектами),
трансформируя объекты массива в презентабельный JSX-код (HTML-код с использованием css-стилей).
Процесс преобразования (т.е. использование метода map()) проходит в файле Blog.js, а JSX-код («HTML-код»)
для каждого индивидуального поста генерируется в Post.js (для этого мы его и подключили в Blog.js),
которому вы будете передавать свойства преобразуемых объектов в виде props’ов.
 */
import React, {Component} from 'react';

import Post from './Post.js';

class Blog extends Component {
    render() {
        const items = this.props.posts.map((item, index) =>
            <Post key = {`crew_${index}`} title = {item.title} text = {item.post}/>);

        return (<div className='blog'>
            {items}
            </div>
        )
    };
};

export default Blog;