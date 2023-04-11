import { rtkApi } from "../../../shared/api/rtkApi";
import {Vacancy} from "../types/vacancy";

const vacancyApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getVacancies: build.query<Vacancy[], void>({
      query: () => ({
        url: '/vacancies'
      }),
      providesTags: result =>['Vacancy']
    }),
    addVacancy: build.mutation({
      query: (data: Vacancy) => ({
        url: '/vacancies',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Vacancy'],
    }),
    toInterview: build.mutation({
      query: (data: Vacancy) => ({
        url: `/vacancies/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Vacancy'],
    }),
    toFailed: build.mutation({
      query: (data: Vacancy) => ({
        url: `/vacancies/${data.id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Vacancy'],
    })
  }),
});

export const useGetVacancies = vacancyApi.useGetVacanciesQuery
export const usePostVacancy = vacancyApi.useAddVacancyMutation
export const useToInterview = vacancyApi.useToInterviewMutation
export const useToFailed = vacancyApi.useToFailedMutation
