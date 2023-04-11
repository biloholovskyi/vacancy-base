import { memo } from "react";
import {VacancyList} from "../../../../entities/vacancy";
import {AddVacancyForm} from "../../../../features/addVacancy";
import cls from './vacanciesPage.module.css'

export const VacanciesPage = memo(function () {
  return (
    <div  className={cls.wrapper}>
      <AddVacancyForm/>
      <VacancyList/>
    </div>
    )
})
