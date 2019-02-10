import React, {Component} from 'react';
import Post from '../post/Post';

export default class Blog extends Component {
    render() {
        const items = this.props.items.map((item, index) => {
            return <Post key={index} title={item.title} href={item.href} body={item.body} date={item.date}/>
        });

        return (
            <div>

                <h2 className='mb-5'>{this.props.titleMenu}</h2>

                <div className="blog-posts">
                    {items}
                </div>

            </div>
        );
    }
}