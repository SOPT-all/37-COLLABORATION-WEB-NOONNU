import { themeVars } from '@/shared/styles';
import { style } from '@vanilla-extract/css';

export const ToggleContainer = style({
    display: 'flex',
    border: `1px solid ${themeVars.color.gray_03}`,
    borderRadius: '4px',
    overflow: 'auto',

    selectors: {
        "&::-webkit-scrollbar": {
            display: 'none',
        },
    },
});

export const ToggleButton = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '0.4rem',
    backgroundColor: 'transparent',
    color: themeVars.color.gray_04,
    cursor: 'pointer',
    transition: 'all 0.2s ease',

    selectors: {
        '&:not(:first-child)': {
            borderLeft: `1px solid ${themeVars.color.gray_03}`,
        },

        '&:hover': {
            backgroundColor: themeVars.color.gray_01,
            color: themeVars.color.black,
        },

        '&:selected': {
            color: themeVars.color.black,
        },
    },
});

export const ToggleButtonSelected = style({
    color: themeVars.color.black,

    selectors: {
        '&:hover': {
            color: themeVars.color.black,
        },
    },

});

export const icon = style({
    width: '2.4rem',
    height: '2.4rem',
    padding: '0.4rem',

    selectors: {
        '&:path': { fill: 'currentColor' },
    },
});