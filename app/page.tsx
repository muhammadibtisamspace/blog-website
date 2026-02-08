'use client'
import Header from '@/components/Header'
import BlogList from './../components/BlogList';
import Footer from './../components/Footer';

const page = () => {
  return (
    <main>
      <Header />
      <BlogList />
      <Footer />
    </main> 
  )
}

export default page