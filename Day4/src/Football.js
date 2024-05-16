import React from 'react';

// class Football extends React.Component {
//     //Cú pháp này đảm bảo `this` được ràng buộc trong shoot.
//     shoot = () => {
//         alert(this);
//         /*
//         Từ khóa 'this' đề cập đến đối tượng thành phần
//         */
//     }
//     render() {
//         return (
//             <button onClick={this.shoot}>Take the shot!</button>
//         );
//     }
// }


class Football extends React.Component {

    shoot() {
        alert(this);
        /*
        Từ khóa 'this' đề cập đến đối tượng thành phần
        */
    }
    render() {
        return (
            <button onClick={() => this.shoot()}>Take the shot!</button>
        );
    }
}

export default Football;

/* const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Football />); */