import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// import Web3 from 'web3';
import { 
  Box, 
  Button, 
  Typography, 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  // DialogTitle, 
} from '@mui/material';
// import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
// import CircularProgress from '@mui/material/CircularProgress';
import styles from '../assets/MintPage.module.css';

const Create = () => {

  // let web3 = new Web3(window.ethereum);

  // user info

  // const fileInput = useRef(null);
  // const navigate = useNavigate();
  // const [isModalOpen, setIsModalOpen] = useState(false);    // Modal Open handling
  // const [message, setMessage] = useState("");               // Modal Message
  // const [checkFile, setCheckFile] = useState(0);            // 비디오(1)인지 이미지(0)인지 체크
  // const [nftItem, setNftItem] = useState(null);
  // const [nftItemUrl, setNftItemUrl] = useState(null);
  // // const [loading, setLoading] = useState(false);  // Add this line
  // const [modalTitle, setModalTitle] = useState(null)

  // // NFT 정보
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState('');
  // const [tokenId, setTokenId] = useState(0); // 초기 토큰 ID를 0으로 설정

  // input value
  // const titleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // // input value  
  // const priceChange = (event) => {
  //   setPrice(event.target.value);
  // };

  // // file upload
  // const imageUpload = (event) => {
  //   if (event.target.files[0] !== undefined) {
  //     // 업로드 한 파일 가져오기
  //     const file = event.target.files[0];
  //     let maxSize = 100;
  //     let ipfsSize = 50;

  //     // 파일을 메가바이트 단위로 변환
  //     let fileSize = (file.size) / Math.pow(10, 6);

  //     if(fileSize < maxSize) {
  //       let fileType = (file.type).split('/')[1];
  //       const imageURL = URL.createObjectURL(file);

  //       if(fileType === 'png' || fileType === 'jpg' || fileType === 'jpeg' || fileType === 'gif') {
  //         setCheckFile(0);

  //         setNftItem(file);
  //         setNftItemUrl(imageURL);
  //       } else if (fileType === 'mp4' || fileType === 'mkv') {
  //         setCheckFile(1);
          
  //         setNftItem(file);
  //         setNftItemUrl(imageURL);
  //       } else {
  //         setModalTitle('Error');
  //         setMessage("File type is not supported. Please upload a PNG, JPG, JPEG, GIF, MP4, or MKV file.");
  //         setIsModalOpen(true);
  //       }
  //     }
  //   }
  // }

  // console.log('nftItem', nftItem);
  // console.log('url', nftItemUrl);
  // }
  
  /**
   * NFT 토큰을 발행하는 비동기 함수다.
   *
   * @async
   * @throws {Error} 파일, 타이틀, 가격 중 하나라도 입력하지 않은 경우, 또는 토큰 발행 중 에러가 발생한 경우.
   * @returns {void} 발행이 성공하면 토큰 ID를 1 증가시키고 토큰 발행 함수(mintToken)를 호출합니다.
   */
  
  // const mint = async () => {
    
  //   if(nftItem == null) { 
  //     setModalTitle('Error');
  //     setMessage('Please upload a file'); 
  //     setIsModalOpen(true); 
  //   } else if (title.length === 0) {
  //     setModalTitle('Error');
  //     setMessage('Please write title'); 
  //     setIsModalOpen(true); 
  //   } else if (price.length === 0) {
  //     setModalTitle('Error');
  //     setMessage('Please write price'); 
  //     setIsModalOpen(true); 
  //   } else {

  //     // 민팅 중 상태로 설정
  //     setLoading(true); 
  //     setModalTitle('Minting');
  //     setMessage('Minting...'); 
  //     setIsModalOpen(true); 
  //     let from = user.account;
  //     let params = [localStorage.getItem('Sign'), from];
  //     let method = 'personal_sign'
  //     console.log(params);
  //     try {
  //       web3.currentProvider.sendAsync({
  //         method,
  //         params,
  //         from
  //       }, function (err, result) {
  //         if (!err) {
  //           const signature = result.result;
  
  //           const formData = new FormData();
  //           formData.append('img', nftItem);
  //           formData.append('title', title);
  //           formData.append('price', price);
  //           formData.append('signature', signature);
  //           formData.append('message', localStorage.getItem('Sign'));
  //           formData.append('userAddress', user.account);
  
  //           axios(`http://localhost:8082/create`, {
  //             method: 'POST',
  //             data: formData,
  //             headers: {
  //               'Content-Type': 'multipart/form-data',
  //               'Accept': '*/*',
  //             }
  //           }).then(res => {
  //             console.log(res);
  //             // Here you can call the mintToken function and pass the metadata url.
  //             let metadata_url = res.data.resultUri; // assuming this is the format of the response
  
  //             mintToken(metadata_url);
  //             setTokenId(tokenId + 1);    // 토큰이 발행된 후 토큰 ID 증가
  //           })
  //         }
  //       })
  //     } catch (error) {
  //       console.log(error);
  //       setModalTitle('Error');
  //       setMessage(error.message); // Set the error message here
  //       setIsModalOpen(true);  // And open the modal with the error
  //       setLoading(false);  // Stop loading
  //     }
  //   }

  // // Add the following useEffect
  // useEffect(() => {
  //   if (message === 'Minting Complete!') {
  //     setTimeout(() => {
  //       setIsModalOpen(false);
  //     }, 5000);
  //   }
  // }, [message]);
  
  return (
<Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      gap: 2, 
      width: '646px',
      maxWidth: '100%',
      margin: '0 auto',
      marginTop: '100px', 
    }}>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Create a NFT</Typography>
      </Box>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant="caption" sx={{
          fontSize: '0.8rem'
          }}
        >
          <span style={{ color: 'red' }}>*</span> Required fields
        </Typography>
      </Box>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <Typography variant='body1' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Image, Video <span style={{ fontWeight: 'bold' }}>*</span>
        </Typography>
        <Typography variant='caption'>File types supported: JPG, PNG, GIF, MP4. Max size: 100 MB</Typography>
      </Box>
      <Box sx={{ alignSelf: 'flex-start' }}>
        <input
          // ref={fileInput}
          type="file"
          style={{ display: 'none' }}
          // onChange={(e) => imageUpload(e)}
          required
        />
        {/* {nftItemUrl ? ( */}
          {/* <Box
            className={styles.boxHover}
            sx={{
              width: '420px',
              height: '320px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '3px dashed rgb(204, 204, 204)',
              borderRadius: '3px',
              marginTop: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onClick={() => fileInput.current.click()}
          >
            <img 
              className={styles.fileInput}
              src={nftItemUrl} 
              alt="Uploaded" 
            />
          </Box>
        ) : (
          <Box
            onClick={() => fileInput.current.click()}
            sx={{
              width: '400px',
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              border: '3px dashed rgb(204, 204, 204)',
              borderRadius: '3px',
              padding: '10px 10px',
              marginTop: '20px',
              transition: '0.3s',
              ':hover': {
                backgroundColor: '#888',
              },
              cursor: 'pointer',
            }}
          >
            <ImageOutlinedIcon sx={{ color: 'rgb(204, 204, 204)', fontSize: '8rem' }} />
          </Box>
        )} */}
      </Box>
      <Box sx={{ alignSelf: 'flex-start', marginTop: '20px' }}>
        <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Title <span style={{ fontWeight: 'bold' }}>*</span>
        </Typography>
        {/* <input type="text" className={styles.nftName} placeholder='Item name' value={title} onChange={titleChange} required /> */}
      </Box>
      <Box sx={{ alignSelf: 'flex-start', marginTop: '20px' }}>
        <Typography variant='body2' sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Price
        </Typography>
        <input type="number" 
          className={styles.nftName}
          placeholder='amount' 
          // value={price}
          // onChange={priceChange}
          required/>
      </Box>
      <Box sx={{ 
        borderBottom: '1px solid rgb(204, 204, 204)',
        width: '100%',
        margin: '20px 0'
      }}></Box>
      <Button 
        variant="contained" 
        sx={{ 
        alignSelf: 'flex-start',
        width: '120px',
        height: '50px',
        borderRadius: '15px'
        }}
        // onClick={mint}
      >
        Mint
      </Button>
      <Dialog
        // open={isModalOpen}
        // onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.logoutModal}
      >
        {/* <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle> */}
        <DialogContent sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <DialogContentText id="alert-dialog-description">
            {/* {loading ? (
              <CircularProgress />
            ) : (
              message
            )} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={closeModal} sx={{ color: '#000' }}>Close</Button> */}
        </DialogActions>
      </Dialog>
    </Box>  
    );
};
  export default Create;