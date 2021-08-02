const app = Vue.createApp({
    data(){
        return {
            firstName: 'Yan',
            lastName: 'Pershay',
            email: 'y.pershay@softteco.com',
            gender: 'male',
            picture: 'https://sun1.dataix-by-minsk.userapi.com/s/v1/ig2/iu2khmK6dVuffkupNRGmEKaZic1lRwF5a5Qmkre5oz2QPjXp188exVjd30kYpUc2EwBUYR6HYbLslvhYTJUMGxY5.jpg?size=200x0&quality=96&crop=0,0,960,1280&ava=1'
        }
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')