import { HeaderIcons, HeaderIcons_2 } from './HeaderIcons';
import { HeaderLogo_5 } from './HeaderLogo';
import { HeaderNavbar_5 } from './HeaderNavbar';
import { HeaderSearch_5 } from './HeaderSearch';

export const HeaderLayout = () => {
    return (
        <>
            <header className='header-5'>
                <div className='logo-nav'>
                    <HeaderLogo_5/>
                    <HeaderNavbar_5/>
                </div>
                <HeaderSearch_5/>
            </header>
        </>
        


    )
}
