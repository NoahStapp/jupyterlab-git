import {
  style
} from 'typestyle'

export const historySideBarStyle = style (
  {
    height: '100vh',
    display: 'none',
    position: 'fixed',
    backgroundColor: 'var( --jp-layout-color2)',
    transition: 'all 0.5s ease',
    left: '33px',
    top: '70px',

    $nest: {
      '&:first-child': {
        paddingTop: '14px'
      }
    }
  }
)

export const historySideBarExpandedStyle = style (
  {
    width: '50px',
    display: 'block'
  }
)

export const openHistorySideBarButtonStyle = style (
  {
    backgroundColor: 'var(--jp-layout-color3)',
    width: '50px',
    height: '15px',
    position: 'fixed',
    left: '33px',
    outline: 'none'
  }
)

export const pastCommitNodeStyle = style (
  {
    position: 'relative',
    color: 'var(--jp-ui-font-color1)',
    width: '36px',
    height: '36px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundImage: 'var(--jp-commit-node)',
    outline: 'none !important',
    margin: '-1px auto -1px auto',
    textAlign: 'center',
    lineHeight: '36px'
  }
)

export const pastCommitWorkingNodeStyle = style (
  {
    backgroundImage: 'var(--jp-working-commit-node)',
  }
)

export const pastCommitLineStyle = style (
  {
    backgroundImage: 'var(--jp-commit-line)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    height: '18px',
    width: '3px',
    margin: '0 auto',
  }
)

export const pastCommitLastLineStyle = style (
  {
    display: 'none'
  }
)