import { memo, FormEvent } from "react";
import cls from './addVacancyForm.module.css'
import {usePostVacancy} from "../../../../entities/vacancy/api/vacancyApi";
import {Vacancy} from "../../../../entities/vacancy/types/vacancy";

export const AddVacancyForm = memo(function () {

  const [addNewVacancy] = usePostVacancy()

  const addNew = (e: FormEvent<HTMLFormElement>) => {
    e.stopPropagation()
    e.preventDefault()
    const target = e.target as HTMLFormElement
    console.log(target.company.value)

    const body: Vacancy = {
      company: target.company.value,
      date: target.date.value,
      title: target.titlevalue.value,
      link: target.link.value,
      status: target.status.value || 'none',
      comment: target.comment.value
    }

    addNewVacancy(body)
      .catch(err => console.error(err))

  }

  return (
    <div className={cls.wrapper}>
      <h3>Add new Vacancy</h3>

      <form className={cls.form} onSubmit={addNew}>
        <input type="text" name={'company'} placeholder={'company'} className={cls.input}/>
        <input type="text" name={'titlevalue'} placeholder={'title'} className={cls.input}/>
        <input type="text" name={'price'} placeholder={'price'} className={cls.input}/>
        <input type="text" name={'date'} placeholder={'date'} className={cls.input}/>
        <input type="text" name={'link'} placeholder={'link'} className={cls.input}/>
        <input type="text" name={'status'} placeholder={'status'} className={cls.input} defaultValue={'none'}/>
        <input type="text" name={'comment'} placeholder={'comment'} className={cls.input}/>
        <button type={'submit'} className={cls.button}>Add new</button>
      </form>
    </div>
  )
})
