const { createApp } = Vue

  createApp({
    data() {
      return {
        newItem: ``,
        toDolist: [
          {
            text: `Jujutsu Kaisen`,
            done: false,
          },
          {
            text: `Naruto`,
            done: true,
          },
          {
            text: `Death Note`,
            done: false,
          },
          {
            text: `My Hero Academia`,
            done: false,
          },
          {
            text: `One Pice`,
            done: true,
          },
          {
            text: `One Punch`,
            done: false,
          },
        ]
      }
    },
    methods: {
      check(index){
        let singleItem = this.toDolist[index]
        if(singleItem.done == false){
          singleItem.done = true
        } else{
          singleItem.done = false
        }
      },
      deleteItem(index){
        this.toDolist.splice(index, 1)
      },
      addNewitem(){
          let object = {
          text: this.newItem,
          done: false,
        }
        this.toDolist.push(object)
        this.newitem = ``
      }
    },
  }).mount('#app')



