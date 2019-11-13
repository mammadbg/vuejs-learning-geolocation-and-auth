<template>
  <div class="test">
    <h2>Test 1</h2>
    <div class="posts" v-for="(post, index) in posts" :key="index">
      <h6>Title {{ post.title }}</h6>
      <h5>id: {{ post.id }}</h5>
    </div>
    <div id="app">
      <!-- <p class="center red-text">{{ seconds }} seconds have elapsed since you opened the page.</p> -->
      <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
    seconds: 0,
    rawHtml: `<a href='fb.com'>fb</a>`,
      user: [
        {
          id: 1,
          title: null
        }
      ],
      posts: [
        {
          id: 5,
          title: null
        }
      ]
    };
  },
  methods: {},
  created() {
          setInterval(() => {
        this.seconds++;
      }, 1000);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].id = 34){
            console.log(this.title)
          }
        }
        
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

Şəxsiyyə vəsiqəsi + Sürücülük vəsiqəsi + Sağlamlıq haqda arayış -
