import regular_clean from '../images/cleaning/regular_clean.png';
import deep_clean from '../images/cleaning/deep_clean.png';
import office_clean from "../images/cleaning/office_clean.png";
import window_clean from "../images/cleaning/window_clean.png";

export const regularlyCleaningPage = 'regularly_cleaning';
export const deepCleaningPage = 'deep_cleaning';
export const officeCleaningPage = 'office_cleaning';
export const windowsCleaningPage = 'windows_cleaning';
export const myProfilePage = 'my_profile';
export const homePage = 'home';


export const cleanings =
    {
        regularly:
            {
                name: "Regularly",
                img: regular_clean,
                alt: 'Regularly cleaning',
                blue_text: 'This is our standard – what we do with every order. We can\n' +
                    'also add custom services to customize your cleaning offer.',
                dark_text: 'We wash the floor and wipe the baseboards\n' +
                    'Carpets vacuuming (with your vacuum cleaner if you don’t have a\n' +
                    'vacuum cleaner don’t worry, we brush carpets)\n' +
                    'Wipe all accessible surfaces\n'+
                'Wipe the switches and door handles\n'+
                    'We clean mirrors and glass surfaces\n'+
                    'We collect and take out the garbage'
            },
        deep:
            {
                name: "Deep",
                img: deep_clean,
                    alt: 'Deep cleaning',
                blue_text: 'When our team comes to you, is managed by the manager. \n'+
                'The manager evaluates the duration, checks the quality\n'+
                    'and answers all your questions.',
                dark_text: 'Wipe all accessible surfaces, switches and door handles\n'+
                    'Washing windows, mirrors and glass surfaces\n'+
                    'Washing furniture inside and outside\n'+
                    'Wiping the walls\n'+
                    'Washing chandeliers and lamps\n'+
            'We wash the floor, wipe the baseboards and vacuum the carpet\n'+
                    'We take out the garbage'
            },
        office:
            {
                name: "Office",
                img: office_clean,
                    alt: 'Office cleaning',
                blue_text: 'The cleaner comes every morning or evening to\n'+
                    'restore cleanliness and order.',
                dark_text: 'Wipe all accessible surfaces, switches and door handles\n'+
                    'Washing windows, mirrors and glass surfaces\n' +
                    'Washing furniture inside and outside\n'+
                'Wiping the walls \n'+
                    'Washing chandeliers and lamps\n'+
                    'We wash the floor, wipe the baseboards and vacuum the carpet\n'+
                    'We take out the garbage'
            },
        windows:
            {
                name: "Windows",
                img: window_clean,
                    alt: 'Windows cleaning',
                blue_text: 'Our employee arrives with everything necessary at the\n'+
                    'agreed time and gets to work immediately.',
                dark_text: 'Wash glass on both sides\n'+
                    'We clean the frame inside and out\n'+
                    'Washing mosquito nets\n'+
                    'Wipe the window sills'
            },

    }

// export const pages = Object.keys(cleanings)
// export const defaultPage = pages[0]

