import React from "react";

const system_users=[
    {id : 1, name : "User1"},
    {id : 2, name : "User2"},
    {id : 3, name : "User3"},
]

class User  extends React.Component{
    constructor(){
        super() //მშობელი კლასისგან მეთოდების მისაღებად აუცილებელია სუპერ მეთოდის დაწერა
        this.state ={ // რადგან რეაქტის ჰუკებს ვერ ვიყენებთ useStateის დაწერა შეუძლებელია ამიტომ ხელით უნდა განვსაზღვროთ
            showUsers: true,
            moreState : "Test",
        };
    }
    displayUser(){ //ყველა მეთოდი უნდა იყოს აღწერილი კლასის შიგნით თუმცა არასდროს დაიწყოთ წერა function ქივორდით
        // this.state.showUsers = false არასწორია მსგავსი გამოძახება
        this.setState((curState) => { // საპირისპირო მდგომარეობის დასაჭერად ჯობს გამოიყენოთ შებრუნებული შემოწმება
            return { showUsers : !curState.showUsers} // ჰუკისგან განსხვავებით ის უპირატესობა აქვს რომ ხდება დამერჯვა/გაერთიანება და არა გადაწერა
        })
    }
    render(){
        const usersList =(
            <ul>
                {system_users.map((user) =>(
                    <li> {user.name}</li>
                ))}
            </ul>
        )
        return(
            <div >
                <button onClick={this.displayUser.bind(this)}>     {/* bind დაგეხმარებათ სთეითის კონკრეტული მნიშვნელობა იპოვოთ */}
                {this.state.showUsers ? "Hide": "Show"} Users
                </button>
                {this.state.showUsers && usersList}
            </div>
        )
    }
}

export default User;