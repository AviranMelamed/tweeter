const Tweeter = function() {

    // An array of posts - this should be private. Use the dummy data below to get started
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    // A variable postIdCounter to count the number of total posts
    let postIdCounter = posts.length

    // A variable commentIdCounter to count the number of total comments
    let commentIdCounter = 0;
    for(let i in posts){
        commentIdCounter += posts[i].comments.length
    }

    // A getPosts function that returns the posts array
    const getPosts = function() {
        return posts
    }


    // An addPost function that receives some text and adds a post object to posts
    // Each object should have three properties: id, text, and comments
    // You should generate the next id correctly for each post: "p4", "p5", ...
    // The comments array should be empty initially
    let addPost = function(text){
        postIdCounter++
        posts.push({text: text, id: "p" + postIdCounter, comments: []}) 
    } 

    // A removePost function that receives a postID and removes the relevant post from posts
    let removePost = function(postID){

        for(let i = 0; i < posts.length; i++) {
            if (posts[i].id == postID) {
                posts.splice(i, 1)
                break
            }
        }
        
    }

    return {
       getPosts: getPosts,
       addPost: addPost,
       removePost: removePost
    }

}

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}fdsafads