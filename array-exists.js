function myBuddy(friends) {
    if (Array.isArray(friends) == false) {
        return 'Please send a array';
    }
    let bigFriend = friends[0];
    for (const friend of friends) {
        if (friend.length > bigFriend.length) {
            bigFriend = friend;
        }
    }
    return bigFriend;
}

const friends = ['nasir', 'emon', 'sabbir', 'istiak'];
// const myBigFriend = myBuddy(friends);
const myBigFriend = myBuddy(154872);
// console.log(myBigFriend);

const search = 'sabbir';
if (friends.indexOf(search) != -1) {
    // console.log('exist');
}
if (friends.includes(search)) {
    console.log('exist');
}