import React from 'react';

export default class DisplayElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    render() {
        console.log('render() вызван!');

        let newsBlock;
        if(this.state.display) {
            newsBlock = <div>
            <h3>Новости</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum nostrum tenetur architecto, minima accusantium eligendi labore ipsum repellendus accusamus voluptatum neque ab, iusto a voluptatibus esse rerum numquam explicabo alias?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos laborum qui assumenda, voluptas necessitatibus fugiat esse minus, beatae maxime dolorum repellendus maiores ab eaque officia veniam obcaecati hic non tempora!</p>
         </div>;
        }

        return (
            <div>
                <h2 className="link" onClick={() => {
                    this.setState({display: !this.state.display})
                }}>Скрыть/показать блок</h2>
                {newsBlock}
            </div>
        );
    }
}