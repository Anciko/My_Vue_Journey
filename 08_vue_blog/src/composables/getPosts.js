import { ref } from "vue"


const getPosts = () => {
    const posts = ref([])
    const error = ref('')

    const loader = async () => {
        try {
            const data = await fetch('http://localhost:3000/posts')
            console.log(data)
            if (!data.ok) {
               throw Error('no data available...')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err)
        }
    }

    return { posts, error, loader }
}

export default getPosts
