<template>
  <article>
    <div class="content">
      <notification/>

      <section class="blocking_report">
        <div class="blocking_report__data">
          Заблокировано <span>351</span>
        </div>
        <div class="blocking_report__data">
          Осталось блокировок <span>15</span>
        </div>
        <button class="btn-orange">КУПИТЬ ЕЩЁ</button>
      </section>

      <section class="main-app-block">

        <div class="object_table">
          <table width="100%">
            <thead>
            <tr>
              <th scope="col">ОБЪЕКТ</th>
              <th scope="col">НАЙДЕНЫ ССЫЛКИ</th>
              <th scope="col">СТАТУС</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">logotip_final_v2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">logotip_final_v2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">logotip_final_v2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">logotip_final_v2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">logotip_final_v2</th>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>

      </section>
    </div>
  </article>
</template>

<script>
import Notification from "../components/UI/Notification"

export default {
  name: "AntiPiracyResult",
  components: {
    Notification
  }
}
</script>

<style scoped lang="scss">


.blocking_report {
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  &__data {
    font-size: 22px;
    line-height: 16px;
    color: var(--gray);
    font-family: var(--ff_regular);
    span {
      margin-left: 30px;
    }
  }
  button {
    height: 40px;
    padding: 9px 60px;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    font-family: var(--ff_medium);
  }
}

.object_table {
  thead {
    th {
      width: 25%;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;
      color: var(--text_gray_color);
      padding-left: 20px;
      font-family: var(--ff_regular);
      box-sizing:border-box;
      text-align: left;
      position: relative;
      &::after {
        content: '';
        background-image: url('../assets/icons/sort_arrow.svg');
        background-repeat:no-repeat;
        background-position: 50%;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        cursor: pointer;
      }
    }
  }

  tbody {
    tr:first-child {
      th {
        border-top-left-radius: 20px;
        border-left:none;
        border-top: none;
      }
      td {
        border-top:none;
        &:last-child {
          border-top-right-radius: 20px;
          border-right: none;
        }
      }
    }
    tr:last-child {
      th {
        border-bottom-left-radius: 20px;
        border-bottom: none;
        border-left:none;
      }
      td {
        border-bottom:none;
        &:last-child {
          border-bottom-right-radius: 20px;
        }
      }
    }
    th {
      // width: 25%;
      background: var(--light_white);
      border:1px solid var(--table_border);
      // height:30px;
      border-left: none !important;
      font-family: var(--ff_regular);
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: var(--gray);
      text-align: left;
      padding: 12px 0 0 20px;
    }
    td {
      width: 25%;
      background: var(--light_white);
      border:1px solid var(--table_border);
      height:30px;
      &:last-child {
        border-right: none;
      }
    }
    &:first-child {
      td {
        border-top-left-radius: 50%;
        border-top:none;
      }
    }
  }
}

</style>