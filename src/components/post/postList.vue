<template>
  <div id="table-form">
      <div v-for="list in getContacts.contacts" :key="list.pageno">
          {{list.no}}
          {{list.name}}
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default{
    data(){
        return{
            page :{
                pageNo : 1,
                pageSize:3,
            }
        }
    },
    created() {
        this.$store.dispatch('GET_CONTACTS',this.page);
    },
    computed : {
        ...mapGetters(['getContacts']),
    }
}
</script>
