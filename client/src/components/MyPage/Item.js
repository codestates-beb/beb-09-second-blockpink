import React, { useEffect, useState, useContext } from 'react';
// import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { 
    Card,
    CardMedia,
    CardContent,
  } from "@mui/material";
import styles from '../../assets/Item.module.css';
// import { get721Contract } from '../../Contract/Contract'
// import { Context } from '../../Context/index';

const Item = () => {
    //   // user info
    // const [cookies, setCookie, removeCookie] = useCookies(['address']);
    // const { state: { user }, dispatch } = useContext(Context);
    
    const [NftList, setNftList] = useState([]);
    const [jsonData, setJsonData] = useState([]);
    const [NftUrl, setNftUrl] = useState();
    const [infoNft, setInfoNft] = useState([]);

//   console.log(cookies.address);
  
    /**
     * 사용자의 토큰을 가져오는 함수다.
     */
    const getUserToken = async () => {
    //     let contractAddress = process.env.REACT_APP_ERC_721_ADDRESS;
    // try {
    //     const response = await get721Contract(contractAddress).methods.getNftTokenList(cookies.address).call();
    //     console.log('response', response)
    //     setNftList(response.map(nft => [Number(nft[0]), nft[1]]));
    // } catch (error) {
    //     console.error(error);
    // }
    }
    useEffect(() => {
        getUserToken()
    }, []);

    /** 
   * 주어진 URL을 IPFS 주소로 변환하는 함수.
   * 
   * @param {string} url 변환할 URL.
   * @returns {string | undefined} IPFS 주소로 변환된 URL입니다. URL이 주어지지 않은 경우 `undefined`를 반환.
   */
  const IpfsParser = (url) => {
    const cid = url.slice(7,url.length)
    const ipfsUrl = "https://ipfs.io/ipfs/" + cid
    return ipfsUrl
  }
    

useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(IpfsParser(url));
        const data = await response.json();
        return Array.isArray(data) ? data : [data];
      } catch (error) {
          console.error(error);
      }
    };
  
    const fetchAllData = async () => {
      try {
        const allData = await Promise.all(NftList.map(async data => fetchData(data[1])));
        setInfoNft(prevList => [...prevList, ...allData.flat()]);
        console.log('jsonData', allData);
      } catch (error) {
          console.error(error);
      }
    };
  
    fetchAllData();
  }, [NftList]);

    return (
        <div className={styles.itemContainer}>
            <p className={styles.title}>Collected</p>
            <div className={styles.borderBottom}></div>
            <div className={styles.nftContainer}>
                {infoNft.map((data, i) => {
                    return (
                        <Link to={`/detail/${i}`} state={{ info: data }} key={i}>
                            <Card sx={{ maxWidth: '300px', borderRadius: '20px' }} className={styles.nft}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={IpfsParser(data.image)}
                                    title="green iguana"
                                    />
                                <CardContent>
                                    <div>
                                        <p className={styles.cardTitle}>{data.name}</p>
                                    </div>
                                    <div className='cardContent'>
                                        <div className={styles.cardFloor}>
                                            <p>Floor</p>
                                            <p>{data.price} ETH</p>
                                        </div>
                                        <div className={styles.cardTotal}>
                                            <p>Total Volume</p>
                                            <p>{data.price} ETH</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
};

export default Item;