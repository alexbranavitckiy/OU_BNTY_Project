import {SideBarModel} from "../../../../model/sideBarModel";


export const comments: SideBarModel[] = [
  {
    id: 1,
    text: "Институт",
    flag: true,
    router_link: "Институт",
    massContent: [1, 2, 3, 4],
    comments: [
      {
        id: 2,
        text: "Руководство института",
        router_link: "Руководство института",
        massContent: [1, 2, 3, 4, 5],
        flag: true,
      }, {
        id: 4,
        text: "Образование",
        flag: true,
        router_link: "Образование",
      }, {
        id: 6,
        text: "Наука",
        flag: true,
        router_link: "Наука",
      }
    ]
  },
  {
    text: "Кафедра «Естественнонаучные и творческие дисциплины»",
    id: 8,
    flag: true,
    router_link: "Кафедра «Естественнонаучные и творческие дисциплины»",
    comments: [
      {
        id: 9,
        text: "Cостав кафедры",
        flag: true,
        router_link: "Cостав кафедры",
      },
      {
        id: 10,
        text: "Обучение",
        router_link: "Обучение",
        flag: true,
      }
      ,
      {
        id: 7,
        text: "Научная деятельность",
        router_link: "Научная деятельность",
        flag: true,
      }
      ,
      {
        id: 7,
        router_link: "План заседаний кафедры и подготовки учебно-методической литературы",
        text: "План заседаний кафедры и подготовки учебно-методической литературы",
        flag: true,
      }
    ]
  }
  ,
  {
    text: "Подраздиления",
    id: 6,
    router_link: "Подраздиления",
    flag: true,
    comments: [
      {
        id: 7,
        router_link: "Региональный центр тестирования и профессиональной ориентации учащейся молодежи",
        text: "Региональный центр тестирования и профессиональной ориентации учащейся молодежи",
        flag: true
      },
      {
        id: 7,
        router_link: "Подготовительное отделение",
        text: "Подготовительное отделение",
        flag: true
      }
    ]
  }
  ,
  {
    text: "Лицей",
    id: 6,
    router_link: "Лицей",
    flag: true
  }
  ,
  {
    text: "Школа юных архитекторов и дизайнеров",
    id: 6,
    router_link: "Школа юных архитекторов и дизайнеров",
    flag: true,
  },
  {
    text: "Онлайн-консультации",
    router_link: "Онлайн-консультации",
    id: 6,
    flag: true,
    comments: [
      {
        id: 7,
        router_link: "Расписание онлайн-консультаций",
        text: "Расписание онлайн-консультаций",
        flag: true,
      },
      {
        id: 7,
        text: "Онлайн-консультации для студентов",
        flag: true,
      }
    ]
  }
  ,
  {
    text: "Политехническая школа юных",
    id: 6,
    flag: true
  }
  ,
  {
    text: "Подготовка к ЦТ и Поступлению в ВУЗ",
    id: 6,
    flag: true,
    comments: [
      {
        id: 7,
        text: "Подготовительные курсы",
        flag: true
      },
      {
        id: 7,
        text: "Выездные подготовительные курсы",
        flag: true
      },
      {
        id: 7,
        text: "Подготовительное отделение",
        flag: true
      },
      {
        id: 7,
        text: "Профориентационная диагностика в БНТУ",
        flag: true
      },
      {
        id: 7,
        text: "Дистанционная подготовка к ЦТ по математике",
        flag: true
      }
    ]
  }
  ,
  {
    text: "Профориентационные субботы БНТУ",
    id: 6,
    flag: true,
  },
  {
    text: "Регистрация на репетиционное тестирование",
    id: 6,
    flag: true,
  }
];
