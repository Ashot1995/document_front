<template>
  <section class="main-app-block">

    <div class="main-app-block__header">
      <div class="add_file">
        <div class="file">
          <div class="input-data">
            <input type="file">
          </div>
          <div class="hint">Загрузить Файл</div>
        </div>
        <div class="description">
          <p>900мб</p>
          <p>logotip_final_final_v2_okonchatelniy.jpg</p>
        </div>
      </div>
    </div>

    <setting-depositing
      :Point="Point"
      :state-id="2"
      :allowSave="false"
    />

    <div class="certificate">
      <div class="custom-radio-form-group">
        <input type="radio" class="custom-radio" name="certificate__language" id="certificate__rus">
        <label for="certificate__rus">Свидетельство на русском</label>
      </div>
      <div class="custom-radio-form-group">
        <input type="radio" class="custom-radio" name="certificate__language" id="certificate__en">
        <label for="certificate__en">Свидетельство на английском</label>
      </div>
    </div>

    <div class="payment">
      <div class="price">1690р.</div>
      <button class="btn-orange">ОПЛАТИТЬ</button>
    </div>

  </section>
</template>

<script>
import SettingAdditionalInformation from "./depositing/setting_depositing/SettingAdditionalInformation";
import SettingType from "./depositing/setting_depositing/SettingType";
import SettingDepositing from "./depositing/setting_depositing/SettingDepositing";
import IconNewFile from "../icons/IconNewFile";

export default {
  name: "NewFile",
  components: {
    SettingDepositing,
    SettingAdditionalInformation,
    SettingType,
    IconNewFile
  },
  data() {
    return {
      Point: {
        Participants: [],
        Company: [],
        Authors: [],
        AdditionalInformation: '',
        Type: 1,
      },
      savedDepon:false,
      attachment : { name : null,file: null }
    }
  },

  methods: {
    createNewParticipant() {
      const newParticipant = {
        id: Date.now(),
        name: '',
        name_en: 'временная заглушка участника'
      }
      this.Point.Participants.push(newParticipant)
    },
    createNewCompany() {
      const newCompany = {
        id: Date.now(),
        name: '',
        name_en: 'Временная заглушка компании'
      }
      this.Point.Company.push(newCompany)
    },
    createNewAuthor() {
      const newAuthor = {
        id: Date.now(),
        name: '',
        name_en: 'временная заглушка автора'
      }
      this.Point.Authors.push(newAuthor)
    },
    updateAdditionalInformation(value) {
      this.Point.AdditionalInformation = value
    },
    removeParticipant(Participant) {
      this.Point.Participants = this.Point.Participants.filter(p => p.id !== Participant.id)
    },
    removeCompany(Company) {
      this.Point.Company = this.Point.Company.filter(p => p.id !== Company.id)
    },
    removeAuthor(Author) {
      this.Point.Authors = this.Point.Authors.filter(p => p.id !== Author.id)
    },
    saveData() {
      if (this.Point.Participants.length === 0 || this.Point.Company.length === 0 || this.Point.Authors.length === 0) {
        alert('Нужно заполнить все обязательные поля')
        return
      }

      for (let i = 0; i < this.Point.Participants.length; i++) {
        if (this.customValidateFields(this.Point.Participants[i])) {
          alert('Заполните все поля правообладателей')
          return
        }
      }
      for (let i = 0; i < this.Point.Company.length; i++) {
        if (this.customValidateFields(this.Point.Company[i])) {
          alert('Заполните все поля правообладателей')
          return
        }
      }
      for (let i = 0; i < this.Point.Authors.length; i++) {
        if (this.customValidateFields(this.Point.Authors[i])) {
          alert('Заполните все поля авторов')
          return
        }
      }

      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    },

    customValidateFields(element) {
      return Boolean(element.name === '')
    }
  }
}
</script>

<style scoped lang="scss">
.certificate {
  margin-bottom: 13px;
  .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
}

.payment {
  display: inline-flex;
  flex-direction:column;
  align-items: center;
  .price {
    font-size: 12px;
    line-height: 18px;
    color: var(--text_gray_color);
    font-family: var(--ff_regular);
    opacity: 1;
  }
  button {
    padding: 12px 26px;
  }
}


section.main-app-block {

  //transform: translateY(-150%);

  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes fadeIn {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
</style>
