<template>
  <div class="contacts resizable">
    <h2>My Contacts</h2>
    <div class="contact__item" v-for="(contact, i) in contacts" :key="contact">
      <img
        :src="`https://i.pravatar.cc/100?img=${i + 1}`"
        alt=""
        width="32"
        height="32"
        class="contact__avatar"
      />
      <p class="contact__name">{{ contact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        'Doohan AS',
        'Adzhar Amrullah',
        'Maulana Yusep',
        'Yoslie',
        'Naufal Ihsan K',
        'Ida Bagus Wedagama Wisnu Wardana Namanya Kok Panjang Banget Sih',
        'Maruf Harsono',
        'Rizki Firmansyah',
        'Marsella Valeria',
        'Agung Hidayat',
      ],
    };
  },
};
</script>

<style scoped>
.contacts {
  width: 400px;
  padding: 24px;
  border: 1px solid #ccc;
}

.contacts > h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
}

.contact__item {
  display: flex;
  align-items: center;
  margin-bottom: 24px;
}

.contact__avatar {
  border-radius: 50%;
  margin-right: 16px;
}

.contact__name {
  text-align: left;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
}
</style>
