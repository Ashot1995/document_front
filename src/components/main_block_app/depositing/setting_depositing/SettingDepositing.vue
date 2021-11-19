<template>
  <div
      @click="startDepon"
      v-if="stateId === 1"
      class="setting-depositing"
  >
    Настроить депонирование
  </div>
  <div
      v-else-if="stateId === 2"
      class="file-description"
      :class="{'file-description-disable': savedDepon}"
  >

    <div class="file-description__point">
      <div class="file-description__point-item">
        <div class="title">Правообладатели:</div>
        <div class="participants items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="men in Point.Participants"
                :key="men.id"
                :savedDepon = savedDepon
                :Model="men"
                @remove="removeParticipant(men)"
            />
          </transition-group>
        </div>
        <div class="company items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="com in Point.Company"
                :key="com.id"
                :savedDepon = savedDepon
                :Model="com"
                @remove="removeCompany(com)"
            />
          </transition-group>
        </div>
        <transition name="files">
          <div v-if="!savedDepon" class="add">
            <div class="add__point" @click="createNewParticipant">
              + Добавить участника*
            </div>
            <div class="add__point" @click="createNewCompany">
              + Добавить компанию
            </div>
          </div>
        </transition>
      </div>

      <div class="file-description__point-item js-owners-en">
        <div class="title">Owners:</div>
        <div class="participants items">
          <div class="item" v-for="men in Point.Participants">
            <input-data-owner-en
                :Model="men"
            />
          </div>
        </div>
        <div class="company items">
          <div class="item" v-for="com in Point.Company">
            <input-data-owner-en
                :Model="com"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="file-description__point">
      <div class="file-description__point-item">
        <div class="title">Авторы:</div>
        <div class="participants items">
          <transition-group name="item-list">
            <input-data-owner
                v-for="author in Point.Authors"
                :Model="author"
                :savedDepon = savedDepon
                :key="author.id"
                @remove="removeAuthor(author)"
            />
          </transition-group>
        </div>
        <div class="add">
          <transition name="files">
            <div v-if="!savedDepon" class="add__point" @click="createNewAuthor">
              + Добавить автора*
            </div>
          </transition>
        </div>
      </div>

      <div class="file-description__point-item js-authors-en">
        <div class="title">Authors:</div>
        <div class="participants items">
          <div class="item" v-for="author in Point.Authors">
            <input-data-owner-en
              :Model="author"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="file-description__point">
      <setting-additional-information
        :AdditionalInformation = Point.AdditionalInformation
        :savedDepon = savedDepon
        @UpdateAdditionalInformation="updateAdditionalInformation"
      />
      <setting-type
        :Type = Point.Type
        :savedDepon = savedDepon
      />
    </div>

    <button
        v-if="!savedDepon && allowSave"
        @click="saveData"
        class="save btn-purple"
    >
      СОХРАНИТЬ
    </button>
    <button
        v-if="savedDepon && allowSave"
        @click="editData"
        class="save btn-edit"
    >
      РЕДАКТИРОВАТЬ
    </button>
  </div>
</template>

<script>
import SettingAdditionalInformation from "./SettingAdditionalInformation";
import SettingType from "./SettingType";
import InputDataOwner from "../../../UI/input/InputDataOwner";
import {mapMutations} from 'vuex'
import InputDataOwnerEn from "../../../UI/input/InputDataOwnerEn";

export default {
  name: "SettingDepositing",
  props: {
    stateId: {
      type:Number
    },
    Point: {
      type: Object
    },
    allowSave: {
      type: Boolean
    }
  },
  components: {InputDataOwnerEn, SettingType, SettingAdditionalInformation, InputDataOwner},
  beforeMount() {
    this.checkData()
  },
  data() {
    return {
      savedDepon: false,
    }
  },
  methods: {
    ...mapMutations({
      mapSaveData:'ClientStoragesModule/saveData'
    }),
    checkData() {
      if (this.Point.stateId === 2) {
        this.savedDepon = true
      }
    },
    startDepon() {
      this.Point.stateId = 2
    },
    createNewParticipant() {
      const newParticipant = {
        id: Date.now(),
        name: '',
        name_en: ''
      }
      this.Point.Participants.push(newParticipant)
    },
    createNewCompany() {
      const newCompany = {
        id: Date.now(),
        name: '',
        name_en: ''
      }
      this.Point.Company.push(newCompany)
    },
    createNewAuthor() {
      const newAuthor = {
        id: Date.now(),
        name: '',
        name_en: ''
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
      if (this.Point.Participants.length === 0 || this.Point.Authors.length === 0) {
        this.Point.stateId = 1
        this.Point.Authors = []
        this.Point.Participants = []
        this.Point.Company = []
        this.Point.AdditionalInformation = ''
        return
      }
      this.mapSaveData(this.Point)
      this.savedDepon = true
    },
    editData() {
      this.savedDepon = false
    },
  }
}
</script>
