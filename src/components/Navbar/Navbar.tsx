import { useContext, useEffect, useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';
import { SectionRefs } from '../../App';
import { DataContext } from '../../context/DataProvider';

type navbarProps = {
  refs: SectionRefs
  scrollToSection: Function
}

const Navbar = ({ refs, scrollToSection }: navbarProps) => {
  // imports
  const { mobileMode } = useContext(DataContext);

  const str = "</>"

  const navDropperRef = useRef<HTMLInputElement>(null);
  const navDropdownRef = useRef<HTMLInputElement>(null);
  const openNavDropdown = () => {
    navDropdownRef.current?.classList.replace("hidden", "shown");
    navDropperRef.current?.classList.add("pressed");
  }
  const closeNavDropdown = () => {
    navDropdownRef.current?.classList.replace("shown", "hidden");
    navDropperRef.current?.classList.remove("pressed");
  }
  const toggleNavDropdown = () => {
    if (navDropperRef.current?.classList.contains("pressed")) {
      closeNavDropdown();
    } else {
      openNavDropdown();
    }
  }
  const [navbarCollapsed, setNavbarCollapsed] = useState<boolean>(false);
  const listenScrollEvent = () => {
    if (window.scrollY > 44) {
      setNavbarCollapsed(true);
    } else {
      setNavbarCollapsed(false);
      closeNavDropdown();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, [])


  return (
    <div className={`navbar transparent ${mobileMode && "vw100"}`}>
      <div className="fillDiv">
        {/* left side of navbar */}
        {!mobileMode &&
          < div className={`navbar-logo ${navbarCollapsed && "hidden"}`}>
            <p><span className='blue-text bold500'>{str}</span> David Ekunno</p>
          </div>
        }

        {/* right side of navbar */}
        <div className="position-right flx-r">
        {!mobileMode &&
          <div className={`navbar-options ${navbarCollapsed && "collapsed"}`}>
            <div onClick={() => scrollToSection()} className="option">
              <p>Home</p>
            </div>
            <div onClick={() => scrollToSection(refs.aboutMeSectionRef)} className="option">
              <p>About</p>
            </div>
            <div onClick={() => scrollToSection(refs.projectsSectionRef)} className="option">
              <p>Projects</p>
            </div>
            <div onClick={() => scrollToSection(refs.contactMeSectionRef)} className="option">
              <p>Contact Me</p>
            </div>
            <div className="flx align-c mr-4">
              <Link to='https://davidekunno.tiiny.site/' target='_blank'><button className="btn-primary">
                <p>View Resume</p>
              </button></Link>
            </div>
          </div>
        }
          <div onClick={() => toggleNavDropdown()} ref={navDropperRef} className={`menu-dropper ${!navbarCollapsed && !mobileMode && "hidden"}`} data-mobileMode={mobileMode ? "true" : "false"}>
            <div className="content">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </div>
            <div ref={navDropdownRef} className="menu-dropdown hidden">
              <div className="option-cold">
                <p><span className='blue-text'>{str}</span> David Ekunno</p>
              </div>
              <hr className='m-0 border-blue' />
              <div className="clickable-options">
                <div onClick={() => scrollToSection()} className="option">
                  <p>Home</p>
                </div>
                <div onClick={() => scrollToSection(refs.aboutMeSectionRef)} className="option">
                  <p>About</p>
                </div>
                <div onClick={() => scrollToSection(refs.projectsSectionRef)} className="option">
                  <p>Projects</p>
                </div>
                <div onClick={() => scrollToSection(refs.contactMeSectionRef)} className="option">
                  <p>Contact Me</p>
                </div>
                <div className="option">
                  <Link to='https://davidekunno.tiiny.site/' target='_blank'>
                    <button className="btn-primary small">View Resume</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  )
}
export default Navbar;