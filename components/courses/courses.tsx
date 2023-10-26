import CourseCard from './courses-card'
import { Course } from '@/type'

interface CourseProps {
  courses: Course[]
  isInstructor?: boolean
}

const Courses: React.FC<CourseProps> = ({ courses, isInstructor }) => {
  return (
    <section className="flex flex-col w-full">
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(auto,_520px))] gap-5 justify-center">
        {courses?.map((course) => (
          <CourseCard
            course={course}
            key={course.course_id}
            isInstructor={isInstructor}
          />
        ))}
      </div>
    </section>
  )
}

export default Courses
