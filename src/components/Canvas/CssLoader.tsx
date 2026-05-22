import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, type MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';
import '../../App.scss'



export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
    <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} ></Box>
));