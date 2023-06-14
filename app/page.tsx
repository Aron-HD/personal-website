import About from "./components/sections/about"
import Footer from './footer'
import Header from './header'
import Home from './components/sections/home';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
// import ContentService from '@/lib/contentful';

export default async function App() {

  return (
    <>
      <Header />
      <main className="flex px-5 py-10 md:py-0 md:px-0 flex-col gap-[50vh] md:grid grid-rows-none md:grid-rows-[90vh_100vh_100vh_100vh] w-full place-items-center md:gap-2">
        <Home id="home" />
        {/* @ts-expect-error Server Component */}
        <About id="about" />
        {/* @ts-expect-error Server Component */}
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  )
}
