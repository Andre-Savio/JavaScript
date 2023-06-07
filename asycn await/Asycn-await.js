const url = 'https://jsonplaceholder.typicode.com/users'

const getUsers = () => {
    const usersData = fetch(url)
    console.log(usersData)
}