import { memo, useMemo } from "react";
import {useGetVacancies} from "../../api/vacancyApi";
import {VacancyCard} from "../vacancyCard/vacancyCard";
import cls from './vacancyList.module.css'

export const VacancyList = memo(function () {
  const {data: vacancies} = useGetVacancies()

  const list = useMemo(() => {
    return vacancies
      ?.slice()
      ?.reverse()
      ?.map(vacancy => (
      <VacancyCard key={vacancy.id} {...vacancy}/>
    ))
  }, [vacancies]);

  return (
    <div className={cls.wrapper}>
      {list}
    </div>
  )
})
