import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faXTwitter, faLinkedin, faFacebook, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
    return (
       <div className="flex p-5 justify-between bg-black text-white">
        <div className=" text-3xl font-bold">
            OLUWAYEMISI
        </div>
        <div className="  space-x-10 text-sm  font-medium">
            <a href="/">HOME</a>
            <a href="/work-with-me">WORK WITH ME</a>
            <a href="/projects">PROJECTS</a>
            <a href="/contact">CONTACT</a>
        </div>
        <div className='space-x-4'>
            <FontAwesomeIcon icon={faEnvelope} href='talktooluwayemisiadebyao.com' />
            <FontAwesomeIcon icon={faXTwitter} href='https://wwww.x.com/Iamyemisikayode' />
            <FontAwesomeIcon icon={faLinkedin} href='https://www.linkedin.com/in/oluwayemisitopekayode/' />
            <FontAwesomeIcon icon={faFacebook} href='https://www.facebook.com/oluwayemisi.kayode.5' />
            <FontAwesomeIcon icon={faInstagram} href='https://www.instagram.com/iamyemisikayode/' />
            <FontAwesomeIcon icon={faThreads} href='Iamyemisikayode' />
        </div>
       </div>
    )
}
