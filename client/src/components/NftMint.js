import React, { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
} from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "../assets/MintPage.module.css";
import useTheme from "@mui/material/styles/useTheme";

import { UserContext } from "../components/Context/UserContext";

// api
import { mintNft } from "../api/post-mint-nft";

export default function NftMint() {
  const { user, setUser } = useContext(UserContext);
  const fileInput = useRef(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal Open handling
  const [message, setMessage] = useState(""); // Modal Message
  const [checkFile, setCheckFile] = useState(0); // 비디오(1)인지 이미지(0)인지 체크
  const [nftItem, setNftItem] = useState(null);
  const [nftItemUrl, setNftItemUrl] = useState(null);
  const [loading, setLoading] = useState(false); // Add this line
  const [modalTitle, setModalTitle] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage("");
  };

  // // NFT 정보
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(100);
  const [tokenId, setTokenId] = useState(1); // 초기 토큰 ID를 1으로 설정

  // input value
  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  // // input value
  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  // // file upload
  const imageUpload = (event) => {
    // console.log(event.target.files);
    if (event.target.files[0] !== undefined) {
      // 업로드 한 파일 가져오기
      const file = event.target.files[0];
      let maxSize = 100;
      let ipfsSize = 50;

      // 파일을 메가바이트 단위로 변환
      let fileSize = file.size / Math.pow(10, 6);

      if (fileSize < maxSize) {
        let fileType = file.type.split("/")[1];
        const imageURL = URL.createObjectURL(file);
        console.log(imageURL);

        if (
          fileType === "png" ||
          fileType === "jpg" ||
          fileType === "jpeg" ||
          fileType === "gif"
        ) {
          setCheckFile(0);

          setNftItem(file);
          setNftItemUrl(imageURL);
        } else if (fileType === "mp4" || fileType === "mkv") {
          setCheckFile(1);

          setNftItem(file);
          setNftItemUrl(imageURL);
        } else {
          setModalTitle("Error");
          setMessage(
            "File type is not supported. Please upload a PNG, JPG, JPEG, GIF, MP4, or MKV file."
          );
          setIsModalOpen(true);
        }
      }
    }
  };

  console.log("nftItem", nftItem);
  console.log("url", nftItemUrl);

  /**
   * NFT 토큰을 발행하는 비동기 함수다.
   *
   * @async
   * @throws {Error} 파일, 타이틀, 가격 중 하나라도 입력하지 않은 경우, 또는 토큰 발행 중 에러가 발생한 경우.
   * @returns {void} 발행이 성공하면 토큰 ID를 1 증가시키고 토큰 발행 함수(mintToken)를 호출합니다.
   */

  const mintHandle = async () => {
    if (nftItem == null) {
      setModalTitle("Error");
      setMessage("Please upload a file");
      setIsModalOpen(true);
    } else if (title.length === 0) {
      setModalTitle("Error");
      setMessage("Please write title");
      setIsModalOpen(true);
    } else if (price.length === 0) {
      setModalTitle("Error");
      setMessage("Please write price");
      setIsModalOpen(true);
    } else {
      // 민팅 중 상태로 설정
      setLoading(true);
      setModalTitle("Minting");
      setMessage("Minting...");
      setIsModalOpen(true);
      try {
        const formData = new FormData();
        formData.append("file", nftItem);
        axios(`http://localhost:8080/upload`, {
          method: "POST",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => {
          console.log(res.data);
          setLoading(false);
          // Here you can call the mintToken function and pass the metadata url.
          let tokenURI = `https://ipfs.io/ipfs/${res.data.ipfsHash}`; // assuming this is the format of the response
          setTokenId(tokenId + 1); // 토큰이 발행된 후 토큰 ID 증가
          mintNft(tokenURI, user.accessToken)
            .then((result) => {
              console.log(result);
              setIsModalOpen(true);
              setMessage("Minting completed.");
              setTimeout(() => {
                setIsModalOpen(false);
                setMessage("");
              }, 2000);
              navigate("/mypage");
            })
            .catch((e) => console.log(e));
        });
      } catch (error) {
        console.log(error);
        setModalTitle("Error");
        setMessage(error.message); // Set the error message here
        setIsModalOpen(true); // And open the modal with the error
        setLoading(false); // Stop loading
      }
    }
  };
  // Add the following useEffect
  useEffect(() => {
    if (message === "Minting Complete!") {
      setTimeout(() => {
        setIsModalOpen(false);
      }, 5000);
    }
  }, [message]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: "100%",
        maxWidth: "646px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-center",
          width: "100%",
          alignItems: "center",
          marginTop: "15px",
          marginLeft: "57%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "800",
              fontSize: "45px",
              fontFamily: "Nanum Myeongjo, Arial, sans-serif",
              textAlign: "center",
              "@media (max-width: 899px)": {
                fontSize: "40px",
                marginLeft: "20px",
              },
              "@media (max-width: 599px)": {
                fontSize: "30px",
                marginLeft: "20px",
              },
            }}
          >
            Create a NFT
          </Typography>
          <Box>
            <Typography
              variant="caption"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "bold",
                color: "#ff006c",
                marginBottom: "12%",
                marginLeft: "347px",
                "@media (max-width: 1399px)": {
                  fontSize: "0.75rem",
                  marginLeft: "352px",
                },
                "@media (max-width: 1299px)": {
                  fontSize: "0.75rem",
                  marginLeft: "352px",
                },
                "@media (max-width: 1199px)": {
                  fontSize: "0.75rem",
                  marginLeft: "287px",
                },
                "@media (max-width: 899px)": {
                  fontSize: "0.7rem",
                  marginLeft: "230px",
                },
                "@media (max-width: 599px)": {
                  fontSize: "0.5rem",
                  marginLeft: "170px",
                },
                "@media (max-width: 500px)": {
                  fontSize: "0.5rem",
                  marginLeft: "143px",
                },
              }}
            >
              <span style={{ color: "#ff006c" }}>(*)</span> Required fields
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #d3d3d3",
          width: "100%",
          margin: "-20px",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      ></Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            marginTop: "30px",
            "@media (max-width: 1199px)": {
              marginLeft: "18%",
            },
            "@media (max-width: 899px)": {
              marginLeft: "34%",
            },
            "@media (max-width: 599px)": {
              marginLeft: "39%",
            },
            "@media (max-width: 500px)": {
              marginLeft: "44%",
            },
          }}
        >
          Image, Video <span style={{ fontWeight: "bold" }}>*</span>
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "12.5px",
            fontWeight: "600",
            "@media (max-width: 1199px)": {
              paddingRight: "0%",
              color: "#f9f9f9",
            },
            "@media (max-width: 500px)": {
              fontSize: "1px",
            },
          }}
        >
          (File types supported: JPG, PNG, GIF, MP4. Max size: 100 MB)
        </Typography>
      </Box>
      <Box sx={{ alignSelf: "flex-start" }}>
        <input
          ref={fileInput}
          type="file"
          style={{ display: "none" }}
          onChange={(e) => imageUpload(e)}
          required
        />
        {nftItemUrl ? (
          <Box
            className={styles.boxHover}
            sx={{
              width: "420px",
              height: "320px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px dashed rgb(204, 204, 204)",
              borderRadius: "3px",
              marginTop: "20px",
              overflow: "hidden",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onClick={() => fileInput.current.click()}
          >
            <img className={styles.fileInput} src={nftItemUrl} alt="Uploaded" />
          </Box>
        ) : (
          <Box
            onClick={() => fileInput.current.click()}
            sx={{
              width: "450%",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "3px dashed #d3d3d3",
              borderRadius: "10px",
              padding: "10px 10px",
              marginTop: "10px",
              transition: "0.3s",
              "@media (max-width: 1399px)": {
                width: "450%",
              },
              "@media (max-width: 1299px)": {
                width: "450%",
              },
              "@media (max-width: 1199px)": {
                width: "355%",
                marginLeft: "50%",
              },
              "@media (max-width: 899px)": {
                width: "266%",
                marginLeft: "95%",
              },
              "@media (max-width: 599px)": {
                width: "200%",
                marginLeft: "108%",
              },
              "@media (max-width: 500px)": {
                width: "170%",
                marginLeft: "92%",
              },
              ":hover": {
                backgroundColor: "#ebeaea",
              },
              cursor: "pointer",
            }}
          >
            <ImageOutlinedIcon sx={{ color: "#d3d3d3", fontSize: "7rem" }} />
          </Box>
        )}
      </Box>
      <Typography
        variant="body2"
        sx={{
          alignSelf: "flex-center",
          fontWeight: "800",
          fontSize: "1.2rem",
          marginTop: "20px",
          marginLeft: "-91.5%",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
            marginLeft: "0%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      >
        Title <span style={{ fontWeight: "800" }}>*</span>
      </Typography>
      <Box
        sx={{
          width: "100%",
          alignSelf: "flex-center",
          marginTop: "-5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      >
        <input
          type="text"
          className={styles.nftName}
          placeholder="Item name"
          value={title}
          onChange={titleChange}
          required
        />
      </Box>
      <Typography
        variant="body2"
        sx={{
          alignSelf: "flex-center",
          fontWeight: "800",
          fontSize: "1.2rem",
          marginTop: "20px",
          marginLeft: "-91.5%",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
            marginLeft: "0%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      >
        Price
      </Typography>
      <Box
        sx={{
          width: "100%",
          alignSelf: "flex-center",
          marginTop: "-5px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)",
          borderRadius: "10px",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      >
        <div>
          <input
            type="number"
            className={styles.nftName}
            placeholder="amount"
            value={price}
            onChange={priceChange}
            required
            disabled
          />
        </div>
      </Box>
      <Box
        sx={{
          borderBottom: "1px solid #d3d3d3",
          width: "100%",
          margin: "20px 0",
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
      ></Box>
      <Button
        variant="contained"
        sx={{
          alignSelf: "center",
          width: "100%",
          height: "50px",
          fontSize: "15px",
          fontWeight: "800",
          borderRadius: "15px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#ff006c",
          "&:hover": {
            backgroundColor: "#e20060",
          },
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
          [theme.breakpoints.down("md")]: {
            width: "60%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "50%",
          },
          [theme.breakpoints.down("xs")]: {
            width: "40%",
          },
        }}
        onClick={mintHandle}
      >
        Mint
      </Button>
      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={styles.logoutModal}
      >
        <DialogTitle id="alert-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <DialogContentText id="alert-dialog-description">
            {loading ? <CircularProgress /> : message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeModal}
            sx={{ color: "#000", fontWeight: "800" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
