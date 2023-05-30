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
      <main className="grid grid-rows-[100vh_100vh_100vh_100vh] w-full place-items-center gap-2">
        <Home id="home" />
        {/* @ts-expect-error Server Component */}
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  )
}
