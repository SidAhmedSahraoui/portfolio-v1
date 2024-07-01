import { createUseStyles } from 'react-jss'

export default createUseStyles({
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100%',
    paddingTop: '32px',
    paddingBottom: '96px',
    '& .box': {
      backgroundColor: 'rgba(255, 0, 102, 0.15)',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      position: 'absolute',
      top: '265px',
      right: '60%',
    },
    '& .main': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      maxWidth: '80rem',
      padding: '0 12px',
      margin: '0 auto',
      height: 'fit-content',
      zIndex: 1,
      '& .title': {
        display: 'block',
        letterSpacing: '-0.025em',
        fontSize: '3.75rem',
        lineHeight: 1,
        fontWeight: 500,
        color: 'white',
        cursor: 'default',
        '& span': {
          color: 'rgb(192, 132, 252)',
          fontWeight: 700,
          '&:hover': {
            color: 'rgb(199, 147, 252)',
          },
        },
      },
      '@media (max-width: 768px)': {
        '& .title': {
          fontSize: '3rem',
        },
      },
      '@media (max-width: 480px)': {
        '& .title': {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
        },
      },
      '& .subtitle': {
        fontSize: '1.125rem',
        lineHeight: '1.75rem',
        maxWidth: '42rem',
        fontWeight: 400,
        margin: 0,
        color: 'rgba(107,114,128, 1)',
      },
      '& .social': {
        display: 'flex',
        gap: '16px',
        height: '64px',
        padding: '32px 0 0 0',
        alignItems: 'center',
        '& .link': {
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          width: 'fit-content',
          '& .img': {
            width: '24px',
            height: '24px',
            color: 'rgba(107, 114, 128, 1)',
            transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
            transitionDuration: '0.5s',
            '&:hover': {
              color: 'white',
              width: '26px',
              height: '26px',
            },
          },
        },
      },
    },
  },
})
