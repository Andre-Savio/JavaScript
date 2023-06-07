const url = 'https://jsonplaceholder.typicode.com/usersaaa' 

const getPost = async () => {
    try {
        const response = await axios.get(url)

        console.log(response.data)

    } catch (error) {
        console.log('peguei você', error)
    }
}




//getPost()
//  .catch(error => {
//    console.log('peguei você', error)
//})