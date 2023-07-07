import React from 'react';
import styles from '../../assets/UserInfo.module.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const UserInfo = () => {
    return (
        <div>
        <div className={styles.walletAddress}>
        <Typography variant="h4" color="#000">
            Block Pink
        </Typography>
          <div>
          <AccountBalanceWalletIcon className={styles.walletIcon}/>
            <p className={styles.address}>
                {/* {`${user.account.slice(0,6)}...${user.account.slice(-5)}`} */}
            </p>
        <Typography variant="h6" color="#000">
            Wallet Address 
        </Typography>
            <div>
        <Typography variant="h6" color="#000">
            Number of Tokens: 222 
        </Typography>
            </div>
            <Button
        variant="contained"
        sx={{
          alignSelf: 'flex-start',
          width: '120px',
          height: '50px',
          borderRadius: '15px'
        }}
      >
        Send Tokens
      </Button>
          </div>
        </div>
        </div>
    )
};

export default UserInfo;
