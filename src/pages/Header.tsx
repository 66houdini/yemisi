import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <div className="flex p-5 w-full justify-between  text-white bg-transparent absolute top-0">
        <Link to="/" className=" text-3xl font-bold">OLUWAYEMISI</Link>
        <div className="  space-x-10 text-sm  font-medium content-center">
          <a href="/">HOME</a>
          <a href="/work-with-me">WORK WITH ME</a>
          <a href="/projects">PROJECTS</a>
          <a href="/contact">CONTACT</a>
        </div>
        <div className='space-x-4 content-center'>
      <FontAwesomeIcon icon={faEnvelope}  href='talktooluwayemisiadebyao.com' />
      <FontAwesomeIcon icon={faXTwitter} href='https://wwww.x.com/Iamyemisikayode' />
      <FontAwesomeIcon icon={faLinkedin} href='https://www.linkedin.com/in/oluwayemisitopekayode/' />
      <FontAwesomeIcon icon={faFacebook} href='https://www.facebook.com/oluwayemisi.kayode.5' />
      <FontAwesomeIcon icon={faInstagram} href='https://www.instagram.com/iamyemisikayode/' />
      <FontAwesomeIcon icon={faThreads} href='Iamyemisikayode' />
  </div>
      </div>
    )
}
