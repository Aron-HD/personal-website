import About from "./components/sections/about"
import Footer from './footer'
import Header from './header'
import Home from './components/sections/home';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
// import ContentService from '@/lib/contentful';

import { ErrorBoundary } from "react-error-boundary";

export default async function App() {

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>

      <Header className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light" />
      <main className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light flex px-5 py-10 md:py-0 md:px-0 flex-col gap-[50vh] md:grid grid-rows-none md:grid-rows-[90vh_100vh_auto_100vh] lg:grid-rows-[90vh_repeat(3,_100vh)] w-full place-items-center md:gap-2">
        <Home id="home" />
        {/* @ts-expect-error Server Component */}
        <About id="about" />
        {/* @ts-expect-error Server Component */}
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer className="dark:bg-background-dark bg-background-light dark:text-text-dark text-text-light" />
    </ErrorBoundary>
  )
}
