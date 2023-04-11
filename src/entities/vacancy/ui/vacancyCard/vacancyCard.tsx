import { memo } from "react";
import {Vacancy} from "../../types/vacancy";
import cls from './vacancyCard.module.css'
import {useToFailed, useToInterview} from "../../api/vacancyApi";

export const VacancyCard = memo(function (props: Vacancy) {

  const {link, title, company, comment, status, date, id} = props

  const [toInterviewApi, {}] = useToInterview()
  const [toFailedApi, {}] = useToFailed()

  const classes = [cls.card]

  switch (status) {
    case 'offer':
      classes.push(cls.offer)
      break
    case 'failed':
      classes.push(cls.fail)
      break
    case 'interview':
    case 'interview after tech interview':
    case 'tech interview':
    case 'interview after tech interview':
      classes.push(cls.interview)
      break

  }

  const toInterview = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    toInterviewApi({link, title, company, comment, status: 'interview', date, id})
  }

  const toFailed = (e: any) => {
    e.stopPropagation()
    e.preventDefault()
    toFailedApi({link, title, company, comment, status: 'failed', date, id})
  }

  return (
    <a href={link} target={'_blank'} className={classes.join(' ')}>
      <div className={cls.buttons}>
        <button className={cls.button} onClick={(e: any) => toInterview(e)}>Interview</button>
        <button className={cls.button} onClick={(e: any) => toFailed(e)}>Failed</button>
      </div>
      <h3>{title}</h3>
      <div className={cls.date}>{date}</div>
      <div className={cls.company}>{company}</div>
      <div className={cls.comment}>{comment}</div>
      <div className={cls.status}>{status}</div>
    </a>
  )
})
