import { generateCourses } from '@/test-data'
import CourseContent from '@/components/course-details/course-content'
import CourseDetailsHero from '@/components/course-details/course-details-hero'
import CourseDetailsStats from '@/components/course-details/course-details-stats'

interface ICourseDetails {
  params: { courseId: string }
}
const courses = generateCourses(1)

const CourseDetails: React.FC<ICourseDetails> = (params) => {
  console.log({ params })
  const course = courses[0]
  return (
    <section className="flex flex-col gap-10 pb-10">
      <CourseDetailsHero
        course_name={course.course_name}
        course_id={course.course_id}
        course_description={course.description}
        average_rating={course.average_rating}
        total_reviews={12354}
        demo_video_id={'1234567'}
        demo_video_host={'vimeo'}
      />
      <CourseContent sections={course.sections} />
      <CourseDetailsStats />
    </section>
  )
}

export default CourseDetails
