import Navbar from '@/components/navbar/nav-bar'
import Image from 'next/image'
import Hero from '@/components/hero/hero'
import Courses from '@/components/courses/courses'
import CourseTitle from '@/components/courses/course-title'
import SellingPoint from '@/components/selling-point/selling-point'
import Testimonial from '@/components/testimonials/testimonial'
import JoinPlatForm from '@/components/join-platform/join-platform'
import Footer from '@/components/footer/footer'
import { NAV_BAR_ITEMS } from '@/constants'
import { generateCourses } from '@/test-data'

const courses = generateCourses(6)
export default function Home() {
  return (
    <div className="flex flex-col gap-[100px] pb-10">
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-5">
        <CourseTitle title="Popular" />
        <Courses courses={courses} />
      </div>
      <SellingPoint />
      <Testimonial />
      <JoinPlatForm />
      <Footer links={NAV_BAR_ITEMS} />
    </div>
  )
}
