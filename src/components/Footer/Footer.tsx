import './index.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials-links">
                <a className="footer__social-link" href="https://vk.com/id11452112">
                    <svg className='footer__social-icon' width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref="/sprite.svg#vk-icon"></use>
                    </svg>
                </a>

                <a className="footer__social-link" href="#">
                    <svg className='footer__social-icon' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <use xlinkHref="/sprite.svg#youtube-icon"></use>
                    </svg>
                </a>

                <a className="footer__social-link" href="#">
                    <svg className='footer__social-icon' width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <use xlinkHref="/sprite.svg#ok-icon" />
                     </svg>
                </a>

                <a className="footer__social-link" href="https://t.me/ruslan17tr">
                    <svg className='footer__social-icon' width="17" height="14">
                        <use xlinkHref="/sprite.svg#telegram-icon"></use>
                    </svg>
                </a>
            </div>
        </footer>
    );
};