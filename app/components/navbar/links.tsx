"use client";

export default ({ scrollFuncs }: Partial<ScrollFuncsProps>) => {

  const { scrollToAbout, scrollToProjects, scrollToContact } =
    scrollFuncs != undefined
      ? scrollFuncs
      : {
        scrollToAbout: () => console.log("scrollToAbout is undefined"),
        scrollToProjects: () => console.log("scrollToProjects is undefined"),
        scrollToContact: () => console.log("scrollToContacts is undefined"),
      }

  const navLinks = [
    { name: "About", onClick: scrollToAbout },
    { name: "Projects", onClick: scrollToProjects },
    { name: "Contact", onClick: scrollToContact },
  ]

  return (
    <ul className="flex m-0 p-0 list-none gap-5 font-mono">
      {navLinks.map((nl, i) => (
        <li
          key={i}
          onClick={nl.onClick}
          className="group relative font-regular text-accent hover:cursor-pointer hover:text-primary hover:bezier-all hover:duration-300 hover:ease-in-out hover:opacity-100 hover:font-bold"
        >
          <p className="inline font-bold static text-primary opacity-90 group-hover:opacity-100 mr-1">
            0{i + 1}.
          </p>
          {nl.name}
          <span className="group-hover:opacity-100 flex absolute opacity-0 h-[3px] w-full -bottom-1 -left-[3px] group-hover:left-0 group-hover:rounded-[20px] group-hover:transition-all group-hover:bg-primary group-hover:bezier-all" />
        </li>)
      )}
    </ul>
  )
}

