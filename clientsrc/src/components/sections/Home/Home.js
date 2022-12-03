import React, {useEffect, useState} from 'react';
import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/swuImage.png';
import axios from 'axios';
import {useRecoilState} from "recoil";
import {resultVideoAtom} from "../../../recoil/uploadResult";
import { useNavigate } from "react-router-dom";

const ALLOW_FILE_EXTENSION = ["mp4"]

const Home = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState()
  const uploadVideo = () => {
    const url = "/api/upload"
    const formData = new FormData()
    formData.append("file", file)
    const config = {
      header: {
        'content-type': 'multipart/form-data' //전달하고자 하는 데이터에 파일이 포함되어있을 때
      }
    }
    return axios.post(url, formData, config)
  }

  function onChangeFileInput(event) {
    console.log(event)
    setFile(event.target.files[0])
    if(event.target.files.length>0){
      console.log("여영" + JSON.stringify(event.target.files[0].name))
    }
  }

  function onClickSubmit(e) {
    e.preventDefault()
    if(file){
      const inputExtension = file.name.substr(file.name.indexOf('.')).replace(".","")
      // 파일 확장자 체크
      if(ALLOW_FILE_EXTENSION.includes(inputExtension)) {
        uploadVideo().then((res) => {
          if (res.data.success) {
            console.log(res.data)
            navigate("/upload")
            window.location.reload()
          } else {
            alert('비디오 업로드를 실패했습니다.')
          }
        })
      }else{
        alert(`This is not an uploadable extension. Please choose again. [only "${ALLOW_FILE_EXTENSION}"]`)
        return;
      }

    }else{
      alert("Please select a video to upload.")
    }
  }

  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME</h1>
            <h2 className='sub-title mb-4'>
              Upload Video Here And Re-create A Safe Video!
            </h2>
            <div classes='btn btn-primary rounded-0 mr-2'>
              <form method="post" enctype="multipart/form-data" onSubmit={onClickSubmit}>
                <input type="file" style={{backgroundColor:"#969696", opacity:"0.7"}} onChange={onChangeFileInput}/>
                <button type="submit">Upload</button>
                {/*<Link to="/upload"> */}
                {/*  <button type="submit">Upload</button> */}
                {/*</Link>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Home;
