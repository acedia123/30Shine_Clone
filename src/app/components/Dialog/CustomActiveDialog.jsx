import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomIconAction from '../Share/CustomIconAction';
import { NotInterestedOutlined } from '@mui/icons-material';

import classNames from 'classnames/bind';
import styles from './Dialog.module.scss';

const cx = classNames.bind(styles);

export default function CustomActiveDialog(props) {
    const { open, handleClose, fullWidth, size = 'xs' } = props;

    return (
        <Dialog
            fullWidth={fullWidth ? fullWidth : true}
            maxWidth={size}
            open={open}
            onClose={handleClose}
            className={cx('notification-dialog')}
        >
            <DialogTitle className="position-relative">
                <CustomIconAction className="close-icon" icon={<CloseIcon />} handleClick={handleClose} label="Close" />
            </DialogTitle>
            <DialogContent>
                <div className={cx('dialog-header')}>
                    <NotInterestedOutlined className={cx('icon', 'text-danger')} />
                    <span className={cx('dialog-title')}>Failure!</span>
                </div>
                <div className={cx('dialog-content')}>
                    Your account has not been activated and you will not be able to login until your account is
                    activated
                    <div>
                        <b>Please check your email!</b>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
