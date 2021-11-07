<template>
  <div id="table-form">
      <table>
        <tr>
            <th>NO</th>
            <th>TEL</th>
            <th>ADDRESS</th>
            <th>NAME</th>
        </tr>
        <tr v-for="list in getPosts.contacts" :key="list.pageno">
            <th>{{list.no}}</th>
            <th>{{list.tel}}</th>
            <th>{{list.address}}</th>
            <th>{{list.name}}</th>
        </tr>
      </table>
      <div id="btn-form">
          <button :disabled="pageNo===1" @click="prevPage" class="page-btn">
              이전
          </button>
          <span class="page-count">{{pageNo }} / {{pageCount}}</span>
          <button :disabled="pageNo >= pageCount " @click="nextPage" class="page-btn">
              다음
          </button>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default{
    data(){
        return{
            pageNo : this.$route.query.pageNo ? this.$route.query.pageNo:1
        }
    },
    created() {
        // this.$store.dispatch('GET_POSTS_COUNT');
        this.$store.dispatch('GET_POSTS', this.pageNo);
    },
    computed : {
        ...mapGetters(['getPosts']),
        pageCount(){
            return this.$store.state.posts.totalcount / this.$store.state.posts.pagesize;
        }
    },
    methods: {
        prevPage() {
            const prevPageNo = this.pageNo - 1;
            this.pageNo = prevPageNo;
            this.$store.dispatch('GET_POSTS', this.pageNo);
        },
        nextPage() {
            const nextPageNo = this.pageNo + 1;
            this.pageNo = nextPageNo;
            this.$store.dispatch('GET_POSTS', this.pageNo);
        }
    }
}
</script>
