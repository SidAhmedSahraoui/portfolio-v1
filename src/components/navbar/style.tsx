import { createUseStyles } from 'react-jss'

export default createUseStyles({
  navbar: {
    width: '100%',
    height: 'fit-content',
    padding: '8px 16px',
    backgroundColor: 'transparent',
    '@media (min-width: 768px)': {},
    '& .container': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',
      '& .social': {
        '& .img': {
          width: '24px',
          height: '24px',
          padding: '8px',
          marginLeft: '8px',
          color: 'white',
        },
      },
    },
    '& .button': {
      padding: '0.5rem 0.75rem',
      borderRadius: 9999,
      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      transitionDuration: 300,
      boxShadow:
        '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      backdropBlur: 'blur(8px)',
    },
  },
})
